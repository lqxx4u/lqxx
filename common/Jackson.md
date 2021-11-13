# jackson-databind注解

# [jackson 时间格式序列化处理](https://github.com/FasterXML/jackson-modules-java8)
## 对象序列化json串传输未知字段问题
接收方处理：
```
    @JsonIgnoreProperties(ignoreUnknown=true)
    //@JsonIgnoreProperties({ "age" })
    public class User3{}
或者 
    ObjectMapper objectMapper = Jackson2ObjectMapperBuilder.json().build();
    User3 user3 = objectMapper.convertValue(user2, User3.class);
    
    ObjectMapper mapper = new ObjectMapper();
    mapper.findAndRegisterModules();
    User3 user5 = mapper.convertValue(user2, User3.class);
```
详情参考：[jsckson 高级使用](https://blog.csdn.net/u011499747/article/details/78762007)


## Jackson相关注解
jackson中的@JsonBackReference和@JsonManagedReference，以及@JsonIgnore均是为了解决对象中存在双向引用导致的无限递归（infinite recursion）问题。这些标注均可用在属性或对应的get、set方法中。 

@JsonBackReference    @JsonManagedReference
经常和@JsonManagedReference通常配对使用，通常用在父子关系中。

@JsonBackReference标注的属性在序列化（serialization，即将对象转换为json数据）时，会被忽略（即结果中的json数据不包含该属性的内容）。

@JsonManagedReference标注的属性则会被序列化。

在序列化时，@JsonBackReference的作用相当于@JsonIgnore，此时可以没有@JsonManagedReference。

但在反序列化（deserialization，即json数据转换为对象）时，

　　如果没有@JsonManagedReference，则不会自动注入@JsonBackReference标注的属性（被忽略的父或子）；

　　如果有@JsonManagedReference，则会自动注入自动注入@JsonBackReference标注的属性。 

@JsonIgnore
@JsonIgnore：作用是进行JSON操作时忽略该属性，以断开无限递归，序列化或反序列化均忽略。当然如果标注在get、set方法中，则可以分开控制，序列化对应的是get方法，反序列化对应的是set方法。

在父子关系中，当反序列化时，@JsonIgnore不会自动注入被忽略的属性值（父或子），这是它跟@JsonBackReference和@JsonManagedReference最大的区别。

@JsonIgnoreProperties
在类的头部统一声明忽略的属性，如：

@JsonIgnoreProperties({ "extra", "uselessValue" })
public class Value {
  public int value;
}
对于意外的位置属性，也可以忽略

@JsonIgnoreProperties(ignoreUnknown=true)
public class PojoWithAny {
  public int value;
}
 

@JsonFormat
@JsonFormat 此注解用于属性上，作用是把Date类型直接转化为想要的格式，如@JsonFormat(pattern = "yyyy-MM-dd HH-mm-ss")。

@JsonProperty
 此注解用于属性上，作用是把该属性的名称序列化为另外一个名称，如把trueName属性序列化为name，@JsonProperty("name")。