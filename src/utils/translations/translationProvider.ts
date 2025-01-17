import { illegal } from "boom";
import { constents } from "../../configs/constents.config";
import { supported_language } from "../../models/supported_language.model";
import { translation } from "../../models/translation.model";
import { translation2 } from "../../models/translation2.model";
import { speeches_en } from "./locales/en";
import { speeches_tn } from "./locales/tn";
import db from "../dbconnection.util";

export default class TranslationsProvider {

    private static translationsFromDbArr: any = {}

    private static defaultLocale = constents.translations_flags.default_locale
    static getDefaultLocale() {
        return this.defaultLocale
    }

    private static supportedLocales: any = [
    ]
    static getSupportedLocales() {
        return this.supportedLocales
    }

    static async init() {
        await this.initSupportedLanguages()

        await this.initTranslationsFromDb()
    }
    static async initSupportedLanguages() {
        ///initialising supported languages first 
        const data = await supported_language.findAll({
            attributes: [
                "locale"
            ],
            raw: true,
        })
        // console.log(data);
        this.supportedLocales = data.map((u) => u.locale)
        // console.log(this.supportedLocales);
    }
    static async initTranslationsFromDb() {
        ///initialising translations for all supported languages  
        for (var i = 0; i < this.supportedLocales.length; i++) {
            const locale = this.supportedLocales[i];
            this.translationsFromDbArr[locale] = {};
            const localeSpecificTranslations = await translation.findAll({
                attributes: [
                    // "translation_id",
                    "key",
                    "value",
                    // "to_locale",
                    // "from_locale",
                ],
                where: {
                    to_locale: locale
                },
                raw: true
            }
            );
            // console.log(localeSpecificTranslations)
            if (localeSpecificTranslations.length > 0) {
                localeSpecificTranslations.map((translation) => {
                    this.translationsFromDbArr[locale][("" + translation.key).trim()] = ("" + translation.value).trim();
                });
            }

        }
        // console.log(this.translationsFromDbArr)
    }
    static getTranslationTo(argToLocale: string, argKey: string) {
        // console.log(typeof argKey);
        if (typeof argKey == 'string') {
            argKey = ("" + argKey).trim()
        }
        // if(argKey == "Community Map"){
        //     console.log("argKey",argKey);
        // }
        if (this.translationsFromDbArr[argToLocale]) {
            const translationsForToLocale = this.translationsFromDbArr[argToLocale]
            // if(argKey == "Community Map"){
            //     // console.log("translationsForToLocale",translationsForToLocale)
            //     console.log("translationsForToLocale[argKey]",translationsForToLocale[argKey]);
            // } 

            if (translationsForToLocale[argKey]) {
                return translationsForToLocale[argKey]
            }
        }
        return argKey;
    }

    static getTranslationKeyForValue(argToLocale: string, argValue: string) {
        // console.log(typeof argKey);
        if (typeof argValue == 'string') {
            argValue = ("" + argValue).trim()
        }
        // if(argValue == "b"){
        //     console.log("argValue",argValue);
        //     console.log("argToLocale",argToLocale);
        // }
        if (this.translationsFromDbArr[argToLocale]) {
            const translationsForToLocale = this.translationsFromDbArr[argToLocale]
            // if(argKey == "Community Map"){
            //     // console.log("translationsForToLocale",translationsForToLocale)
            //     console.log("translationsForToLocale[argKey]",translationsForToLocale[argKey]);
            // }
            
            
            const objKeys = Object.keys(translationsForToLocale)
            let translatedObjKey=null
            for(var i =0;i<objKeys.length;i++){
                const objkey = objKeys[i]
                if(translationsForToLocale[objkey] == argValue){
                    translatedObjKey =  objkey
                    // console.log("objkey",objkey)
                    // console.log("translationsForToLocale[objkey]",translationsForToLocale[objkey])
                    break;
                }
            }
            
            
            if (translatedObjKey) {
                // console.log("translatedObjKey",translatedObjKey)
                return translatedObjKey;
            }
        }
        return argValue;
    }


    static getSpeechesFor(arglocale: string = this.defaultLocale) {
        switch (arglocale) {
            case "en":
                return speeches_en;
            case "tn":
                return speeches_tn;
            default:
                return speeches_en;
        }
    }

    static async translateRefresh(translateTable:any)
    {
        let bulkInsert:any = [];
        if(translateTable != "*")
        {
            // let translateTable = "quiz_questions";
            
            for(let i=0;i<translateTable.length;i++)
            {
                let columns:any = constents.TRANSLATION_CONFIG.table_column[translateTable[i] as keyof Object]['columns' as keyof Object]
                let indexNo:any = constents.TRANSLATION_CONFIG.table_column[translateTable[i] as keyof Object]['primary_key' as keyof Object]
                let translateKeys:any = await db.query(`SELECT ${columns} , ${indexNo} as index_no FROM ${translateTable[i]}`);
                let tableName = translateTable[i];
                translateKeys = translateKeys[0];
                // console.log("🚀 ~ file: translationProvider.ts ~ line 152 ~ TranslationsProvider ~ translateKeys", translateKeys,tableName,indexNo);
                
                for(let z:any=0;z<translateKeys.length;z++)
                {
                    // console.log("🚀 ~ file: translationProvider.ts ~ line 158 ~ TranslationsProvider ~ translateKeys", translateKeys[z]);
                    for(let eachColumn of Object.keys(translateKeys[z]))
                    {
                        // console.log("🚀 ~ file: translationProvider.ts ~ line 162 ~ TranslationsProvider ~ eachColumn", eachColumn)
                        if(eachColumn !== 'index_no')
                        {
                            let insertTranslate:any = {
                                                    "table_name" : tableName,
                                                    "coloumn_name": eachColumn,
                                                    "index_no" : translateKeys[z]['index_no'],
                                                    // "key" : translateKeys[z][eachColumn],
                                                  }
                            let translateData:any = await translation2.findOne({
                                where:insertTranslate,
                                raw: true
                            })

                            let translateKey = translateKeys[z][eachColumn];
                            if(translateData)
                            {
                                insertTranslate['translation_id'] = translateData['translation_id']
                                insertTranslate['value'] = '';
                                if(translateKey == translateData['key'])
                                {
                                    continue;
                                }
                            }

                            //translate table key
                            insertTranslate['key'] = translateKey;
                            bulkInsert.push(insertTranslate);
                            
                            // console.log("🚀 ~ file: translationProvider.ts ~ line 167 ~ TranslationsProvider ~ Object.keys ~ insertTranslate", insertTranslate)
                        }
                    }
                    
                }

            }

            let result;
            if(bulkInsert.length)
            {
                
                result = await translation2.bulkCreate(bulkInsert,{ updateOnDuplicate: ["table_name","coloumn_name","index_no","key"] }
                );
                // console.log("🚀 ~ file: translationProvider.ts ~ line 186 ~ TranslationsProvider ~ result", result);
            }

            return [result,bulkInsert];
        }
    }

}