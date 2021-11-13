
You can't specify target table 't_order_third' for update in FROM clause

意思是不能先select出同一表中的某些值，再update这个表(在同一语句中)。

-- 直接执行报错

update t_order_third set fbrand_info = (select fbrand_info aa from t_order_third where fthirdorderId=14520)
where fbrand_info is null and fisdelete =0

-- 修改后正常, 意思就是变个方向，在select外边套一层，让数据库认为你不是查同一表的数据作为同一表的更新数据：

update t_order_third set fbrand_info = (select aaa.aa from (select fbrand_info aa from t_order_third where fthirdorderId=14520) aaa )
where fbrand_info is null and fisdelete =0
