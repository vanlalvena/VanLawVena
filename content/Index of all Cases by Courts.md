---
title: Index of all Cases by Courts
draft: true
tags: 
date: 
aliases: 
description:
---
# Supreme Court
```dataview
TABLE Court AS "Court"
from "All Cases"
WHERE Court="Supreme Court"
```

# High Court
```dataview
TABLE Court AS "Court"
from "All Cases"
WHERE Court!="Supreme Court"
```

[[index|Homepage]]