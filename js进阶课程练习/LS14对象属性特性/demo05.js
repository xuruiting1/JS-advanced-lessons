对象是否可扩展


Extensible（Object.isExtensible( )、Object.preventExtensions( )）
限制是否可以添加新属性
seal（Object.isSealed( )、Object.seal( )密封   不能去删除属性）在extend的限制基础上，增加限制可配置属性特性
 freeze（Object.isFrozen( )、Object.freeze( )冻结）在seal的限制基础上，增加限制可写属性特性   还不可以更改属性。

 