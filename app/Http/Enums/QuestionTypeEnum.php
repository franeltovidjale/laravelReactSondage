<?php

namespace App\Enums;

enum QuestionTypeEnum :string
{
    case TYPE_TEXT = 'text';
    case TYPE_TEXTAREA = 'textarea';
    case Select = 'select';
    case Radio = 'radio';
    case Checkbox = 'checkbox';
}


