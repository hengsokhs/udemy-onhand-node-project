Project name: udemy-onhand-node-project

## Notes:

### Insert Data

- Insert one document

```
db.tours.insertOne({ name: 'Angkor Wat', price: 12.5, status: true })
```

- Insert multi documents

```
db.tours.insertMany([ {name: 'Angkor Thom', price: 12.5, status: true}, {name: 'Ta Prohm', price: 10, status: false} ])
```

### Query Data

- Find All

```
db.tours.find()
```

- Find price less than/equal

```
db.tours.find({ price: {$lte: 10} })
```

- Find price lte 500 and rating gte 4.8 (using AND operator)

```
db.tours.find({ price: {$lte: 12.5}, status: true })
```

- Find price gte 11 or rating gte 4.8 (using OR operator)

```
db.tours.find({ $or: [ {price: {$gte: 11}, {status: true} } ] })
```

- Find and Select sepecic column

```
db.tours.find({ status: true }, {name: 1, price: 2})
```

### Update Data

- Update document

```
db.tours.updateOne( {name: 'Angkor Wat'}, { $set: { price: 5, status: false } } )
```

- Update document by ObjectId

```
db.tours.updateOne( { _id: ObjectId("6abc96dac62c27e798534bed") }, { $set: { status: false }} )
```

### Delete Data

- Delete a document

```
db.tours.deleteOne({ name: 'Angkor Wat' })
```

### Keywords

`$lte` = Less than equal <br>
`$gte` = Great than equal <br>
`$lt` = Less than <br>
`$gt` = Great than <br>
`$or` = OR Operator <br>

```

```
