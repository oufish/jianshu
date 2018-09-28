4.0路由问题
1、exact 表示路由需要完全匹配，不加的会会出问题，比如/detail 这样会匹配了/页面和detail页面
2、BrowserRouter 代表一个路由  route 代表一个一个的路由规则
比如：
     <div>
          <Header />
          <BrowserRouter>
          <div>
            <Route path="/" exact render={() => <div>home</div>}></Route>
            <Route path="/detail" exact render={() => <div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
immutable 中的formJS 会把数组里面的对象也变成immutable对象
              list 只会把外层数组变成immutable对象，而内部的对象还是js对象