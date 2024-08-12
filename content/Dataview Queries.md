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
TABLE Court, bench-strength AS "Bench Strength", file.folder as "Folder"
FROM "All Cases"
SORT Court Desc, file.name ASC
```

# Query 2 - Cases by Courts (SC)

```dataview
TABLE Court, bench-strength AS "Bench Strength", file.folder as "Folder"
from "All Cases"
WHERE Court="Supreme Court"
SORT file.name ASC
```

# Query 3 - HC

```dataview
TABLE Court, bench-strength AS "Bench Strength", file.folder as "Folder"
FROM "All Cases"
WHERE Court!="Supreme Court"
SORT Court ASC
SORT file.name ASC
```

# Query 4 - All Laws

```dataview
TABLE
from #Act
SORT file.name ASC
```

