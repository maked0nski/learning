db.getCollection('students').find({

})
-- 1) Знайти всіх дітей в яких сердня оцінка 4.2
db.getCollection('students').find({
    avgScore:4.2
})
-- 2) Знайди всіх дітей з 1 класу
db.getCollection('students').find({
    class:1
})
-- 3) Знайти всіх дітей які вивчають фізику ["informatics", "physics"]
db.getCollection('students').find({
    lessons: 'physics'
})
-- 4) Знайти всіх дітей, батьки яких працюють в науці ( scientist )
db.getCollection('students').find(
    {'parents.profession': 'scientist'}
)
-- 5) Знайти дітей, в яких середня оцінка більша за 4
db.getCollection('students').find({
    avgScore: { $gt : 4 }
})
-- 6) Знайти найкращого учня
db.getCollection('students').find().sort({avgScore:-1}).limit(1)

-- 7) Знайти найгіршого учня
db.getCollection('students').find().sort({avgScore:1}).limit(1)
-- 8) Знайти топ 3 учнів
db.getCollection('students').find().sort({avgScore:-1}).limit(3)
-- 9) Знайти середній бал по школі
db.getCollection('students').aggregate([
   {
     $group: {
        '_id':'clearField',
        'avgPoint':{ $avg: '$avgScore'}
    }
   },
   {
   $project:{
   '_id': 0
   }
   }
])
-- 10) Знайти середній бал дітей які вивчають математику або фізику
db.getCollection('students').aggregate([
   {
      $match: {
         $or: [{lessons:'mathematics'},{lessons:'physics'}]
      }
   },
   {
      $group:{
         '_id': 'mathematics and  physics',
         'avgPoint': {
            $avg: '$avgScore'
         }
      }
   }
])
-- 11) Знайти середній бал по 2 класі
db.getCollection('students').aggregate([
    {
        $match: {class: 2}
    },
    {
        $group:{
            '_id':'Second class',
            'avgPoint': {
                $avg : '$avgScore'
            }

        }
    }
])
-- 12) Знайти дітей з не повною сімєю

-- 13) Знайти батьків які не працюють
-- 14) Не працюючих батьків влаштувати офіціантами
-- 15) Вигнати дітей, які мають середній бал менше ніж 2.5
-- 16) Дітям, батьки яких працюють в освіті ( teacher ) поставити 5
-- 17) Знайти дітей які вчаться в початковій школі (до 5 класу) і вивчають фізику ( physics )
-- 18) Знайти найуспішніший клас