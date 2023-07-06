# `google_endpoints_service_consumers_iam_member`

Refer to the Terraform Registory for docs: [`google_endpoints_service_consumers_iam_member`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member).

# `googleEndpointsServiceConsumersIamMember` Submodule <a name="`googleEndpointsServiceConsumersIamMember` Submodule" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEndpointsServiceConsumersIamMember <a name="GoogleEndpointsServiceConsumersIamMember" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member google_endpoints_service_consumers_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleendpointsserviceconsumersiammember"

googleendpointsserviceconsumersiammember.NewGoogleEndpointsServiceConsumersIamMember(scope Construct, id *string, config GoogleEndpointsServiceConsumersIamMemberConfig) GoogleEndpointsServiceConsumersIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig">GoogleEndpointsServiceConsumersIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig">GoogleEndpointsServiceConsumersIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.putCondition"></a>

```go
func PutCondition(value GoogleEndpointsServiceConsumersIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleendpointsserviceconsumersiammember"

googleendpointsserviceconsumersiammember.GoogleEndpointsServiceConsumersIamMember_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleendpointsserviceconsumersiammember"

googleendpointsserviceconsumersiammember.GoogleEndpointsServiceConsumersIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleendpointsserviceconsumersiammember"

googleendpointsserviceconsumersiammember.GoogleEndpointsServiceConsumersIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference">GoogleEndpointsServiceConsumersIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.consumerProjectInput">ConsumerProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.consumerProject">ConsumerProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.condition"></a>

```go
func Condition() GoogleEndpointsServiceConsumersIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference">GoogleEndpointsServiceConsumersIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleEndpointsServiceConsumersIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a>

---

##### `ConsumerProjectInput`<sup>Optional</sup> <a name="ConsumerProjectInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.consumerProjectInput"></a>

```go
func ConsumerProjectInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.consumerProject"></a>

```go
func ConsumerProject() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEndpointsServiceConsumersIamMemberCondition <a name="GoogleEndpointsServiceConsumersIamMemberCondition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleendpointsserviceconsumersiammember"

&googleendpointsserviceconsumersiammember.GoogleEndpointsServiceConsumersIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#expression GoogleEndpointsServiceConsumersIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#title GoogleEndpointsServiceConsumersIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#description GoogleEndpointsServiceConsumersIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#expression GoogleEndpointsServiceConsumersIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#title GoogleEndpointsServiceConsumersIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#description GoogleEndpointsServiceConsumersIamMember#description}.

---

### GoogleEndpointsServiceConsumersIamMemberConfig <a name="GoogleEndpointsServiceConsumersIamMemberConfig" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleendpointsserviceconsumersiammember"

&googleendpointsserviceconsumersiammember.GoogleEndpointsServiceConsumersIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsumerProject: *string,
	Member: *string,
	Role: *string,
	ServiceName: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.consumerProject">ConsumerProject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#consumer_project GoogleEndpointsServiceConsumersIamMember#consumer_project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#member GoogleEndpointsServiceConsumersIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#role GoogleEndpointsServiceConsumersIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#service_name GoogleEndpointsServiceConsumersIamMember#service_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#id GoogleEndpointsServiceConsumersIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.consumerProject"></a>

```go
ConsumerProject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#consumer_project GoogleEndpointsServiceConsumersIamMember#consumer_project}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#member GoogleEndpointsServiceConsumersIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#role GoogleEndpointsServiceConsumersIamMember#role}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#service_name GoogleEndpointsServiceConsumersIamMember#service_name}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.condition"></a>

```go
Condition GoogleEndpointsServiceConsumersIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#condition GoogleEndpointsServiceConsumersIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_endpoints_service_consumers_iam_member#id GoogleEndpointsServiceConsumersIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEndpointsServiceConsumersIamMemberConditionOutputReference <a name="GoogleEndpointsServiceConsumersIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleendpointsserviceconsumersiammember"

googleendpointsserviceconsumersiammember.NewGoogleEndpointsServiceConsumersIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEndpointsServiceConsumersIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEndpointsServiceConsumersIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEndpointsServiceConsumersIamMember.GoogleEndpointsServiceConsumersIamMemberCondition">GoogleEndpointsServiceConsumersIamMemberCondition</a>

---



