//
//  CustomMudule.m
//  weishirndemo
//
//  Created by bjhl on 2020/7/28.
//

#import <Foundation/Foundation.h>
#import "AppDelegate.h"
#import "CustomModule.h"
@implementation CustomModule
RCT_EXPORT_MODULE();                  //导出原生模块
-(NSArray<NSString *>*)supportedEvents{
  return @[@"EventReminder"];
}
RCT_EXPORT_METHOD
(getStringFromRN:(NSString *)s) {     //供JavaScript层调用
     NSLog(@"来自RN的数据：%@",s);
}
@end


