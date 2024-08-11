---
title: Dataview Queries
draft: true
tags: 
date: 
aliases: 
description:
---
# Query 1 - All Cases
```dataview
TABLE Court AS "Court"
from "All Cases"
SORT file.name ASC
```

# Query 2 - Cases by Courts (SC)

```dataview
TABLE Court AS "Court"
from "All Cases"
WHERE Court="Supreme Court"
SORT file.name ASC
```

# Query 3 - HC

```dataview
TABLE Court AS "Court" from "All Cases"
WHERE Court!="Supreme Court"
SORT Court ASC
SORT file.name ASC
```

# Query 4 - All Laws

```dataview
LIST
from #Act
SORT file.name ASC
```