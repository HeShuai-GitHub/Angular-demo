// 这个是Angular根模块，告诉Angular如何组装应用

// BrowserModule 是浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// NgModule 核心模块
import { NgModule } from '@angular/core';
// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 双向数据绑定 form
import {FormsModule} from '@angular/forms';
// 根组件
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormMVVMComponent } from './components/form-mvvm/form-mvvm.component';
import { LogicComponent } from './components/logic/logic.component';
import { ServiceComponent } from './components/service/service.component';
// 引入服务
import {DataStorageService} from './services/data-storage.service';
import { LoginChildComponent } from './components/login-child/login-child.component';
import { LifecycleMethodComponent } from './components/lifecycle-method/lifecycle-method.component';
import { RxjsDataComponent } from './components/rxjs-data/rxjs-data.component';
import { HttpsentComponent } from './components/httpsent/httpsent.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NewsComponent } from './components/news/news.component';
import { NewDetailComponent } from './components/new-detail/new-detail.component';
import { NewsDetailDynamicComponent } from './components/news-detail-dynamic/news-detail-dynamic.component';
import { FCRouterComponent } from './components/f-c_router/f-c-router.component';
import { FRouterComponent } from './components/f-c_router/f_router/f-router.component';
import { CRouterComponent } from './components/f-c_router/c_router/c-router.component';
import { COneDetailComponent } from './components/f-c_router/c_router/c-one-detail/c-one-detail.component';
import { CTwoDetailComponent } from './components/f-c_router/c_router/c-two-detail/c-two-detail.component';
import { FTwoDetailComponent } from './components/f-c_router/f_router/f-two-detail/f-two-detail.component';
import { FOneDetailComponent } from './components/f-c_router/f_router/f-one-detail/f-one-detail.component';
// @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  // 配置当前项目运行的组件
  declarations: [
    AppComponent,
    HeaderComponent,
    FormMVVMComponent,
    LogicComponent,
    ServiceComponent,
    LoginChildComponent,
    LifecycleMethodComponent,
    RxjsDataComponent,
    HttpsentComponent,
    NewsComponent,
    NewDetailComponent,
    NewsDetailDynamicComponent,
    FCRouterComponent,
    FRouterComponent,
    CRouterComponent,
    COneDetailComponent,
    CTwoDetailComponent,
    FTwoDetailComponent,
    FOneDetailComponent
  ],
  // 配置当前项目运行依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  // 配置当前项目所需要的服务
  providers: [
    DataStorageService,
    HttpClientModule
  ],
  // 指定应用的主视图（根组件），通过引导AppModule来启动应用，
  bootstrap: [AppComponent]
})
// 对外暴露的模块，不过根模块不需要配置
export class AppModule { }
