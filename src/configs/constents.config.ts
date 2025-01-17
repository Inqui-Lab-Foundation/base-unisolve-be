export const constents = {
  log_levels: {
    list: {
      'INFO': 'INFO',
      'ERROR': 'ERROR',
      'WARNING': 'WARNING',
      'DEBUG': 'DEBUG',
      'CRITICAL': 'CRITICAL',
      'SUCCESS': 'SUCCESS',
      'FAILURE': 'FAILURE',
      'LOGIN': 'LOGIN',
      'LOGOUT': 'LOGOUT',
      'INBOUND': 'INBOUND',
      'OUTBOUND': 'OUTBOUND'
    },
    default: 'INFO'
  },
  status_codes: {
    list: ['200', '400', '401', '403', '404', '500'],
    default: '200'
  },
  http_methods: {
    list: {
      'GET': 'GET',
      'POST': 'POST',
      'PUT': 'PUT',
      'DELETE': 'DELETE',
      'OPTIONS': 'OPTIONS'
    },
    default: 'GET'
  },
  common_status_flags: {
    list: {
      'ACTIVE': 'ACTIVE',
      'INACTIVE': 'INACTIVE',
      'DELETED': 'DELETED',
      'LOCKED': 'LOCKED',
      'ALL': 'ALL'
    },
    default: 'ACTIVE'
  },
  tut_videos_type_flags: {
    list: {
      'ALL': 'ALL',
      'MENTOR': 'MENTOR',
      'STUDENT': 'STUDENT',
    },
    default: 'ALL'
  },
  organization_status_flags: {
    list: {
      'NEW': 'NEW',
      'ACTIVE': 'ACTIVE',
      'INACTIVE': 'INACTIVE',
      'DELETED': 'DELETED',
      'LOCKED': 'LOCKED'
    },
    default: 'ACTIVE'
  },
  support_tickets_status_flags: {
    list: {
      'OPEN': 'OPEN',
      'INPROGRESS': 'INPROGRESS',
      'RESOLVED': 'RESOLVED',
      'BLOCKED': 'BLOCKED'
    },
    default: 'OPEN'
  },
  quiz_question_level_flags: {
    list: {
      'HARD': 'HARD',
      'MEDIUM': 'MEDIUM',
      'EASY': 'EASY',
    },
    default: 'HARD'
  },
  quiz_question_type_flags: {
    list: {
      'MCQ': 'MCQ',
      'MRQ': 'MRQ',
      'DRAW': 'DRAW',
      'TEXT': 'TEXT',
    },
    default: 'MRQ'
  },
  user_role_flags: {
    list: {
      'ADMIN': 'ADMIN',
      'EVALUATER': 'EVALUATER',
      'MENTOR': 'MENTOR',
      'STUDENT': 'STUDENT'
    },
    default: 'ADMIN'
  },
  common_yes_no_flags: {
    list: {
      'YES': 'YES',
      'NO': 'NO'
    },
    default: 'NO'
  },

  notification_status_flags: {
    list: {
      'DRAFT': 'DRAFT',
      'PUBLISHED': 'PUBLISHED',
      'DELETED': 'DELETED'
    },
    default: 'DRAFT'
  },

  task_status_flags: {
    list: {
      'COMPLETED': 'COMPLETED',
      'INCOMPLETE': 'INCOMPLETE'
    },
    default: 'INCOMPLETE'
  },

  notification_types: {
    list: {
      'EMAIL': 'EMAIL',
      'SMS': 'SMS',
      'PUSH': 'PUSH'
    },
    default: 'PUSH',
    default_title: 'Notification',
    default_message: 'Notification'
  },
  topic_type_flags: {
    list: {
      'VIDEO': 'VIDEO',
      'WORKSHEET': 'WORKSHEET',
      'QUIZ': 'QUIZ',
      'ATTACHMENT': 'ATTACHMENT',
      'CERTIFICATE': 'CERTIFICATE'
    },
    default: 'VIDEO',
  },
  gender_flags: {
    list: {
      'FEMALE': 'FEMALE',
      'MALE': 'MALE',
      'OTHERS': 'OTHERS'
    },
    default: 'MALE',
  },
  res_status: {
    list: {
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
    },
    default: '0'
  },
  challenges_flags: {
    list: {
      "DRAFT": "DRAFT",
      "SUBMITTED": "SUBMITTED",
      "EVALUATION": "EVALUATION",
      "SELECTEDROUND1": "SELECTEDROUND1",
      "REJECTEDROUND1": "REJECTEDROUND1"
    },
    default: "DRAFT"
  },
  quiz_survey_status_flags: {
    list: {
      "ALL": "ALL",
      "COMPLETED": "COMPLETED",
      "INCOMPLETE": "INCOMPLETE",
    },
    default: "ALL"
  },
  translations_flags:{
    default_locale: "en"
  },
  default_image_path: "/images/default.jpg",
  reports_all_ment_reports_rs_flags: {
    list: {
      "ALL": "ALL",
      "COMPLETED": "COMPLETED",
      "INCOMPLETE": "INCOMPLETE",
      "INPROGRESS": "INPROGRESS",
    },
    default: "ALL"
  },
  TEAMS_MAX_STUDENTS_ALLOWED: 5,
  ALPHA_NUMERIC_PATTERN : /^[a-zA-Z0-9 ]*$/,
  TRANSLATION_CONFIG:{
    table_column : {
      "quiz_questions" : {
        "primary_key" : "quiz_question_id",
        "columns" : [
        'question',
        'option_a',
        'option_b',
        'option_c',
        'option_d',
        'correct_ans',
        'question_image',
        'question_icon',
        'msg_ans_correct',
        'msg_ans_wrong',
        'ar_image_ans_correct',
        'ar_video_ans_correct',
        'accimg_ans_correct',
        'ar_image_ans_wrong',
        'ar_video_ans_wrong',
        'accimg_ans_wrong',
      ]}
    }
  }
};
