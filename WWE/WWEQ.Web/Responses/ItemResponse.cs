﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WWEQ.Web.Responses
{
    public class ItemResponse<T> : SuccessResponse
    {
        public T Item { get; set; }

    }
}