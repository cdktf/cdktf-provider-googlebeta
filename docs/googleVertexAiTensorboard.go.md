# `googleVertexAiTensorboard` Submodule <a name="`googleVertexAiTensorboard` Submodule" id="@cdktf/provider-google-beta.googleVertexAiTensorboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiTensorboard <a name="GoogleVertexAiTensorboard" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard google_vertex_ai_tensorboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googlevertexaitensorboard"

googlevertexaitensorboard.NewGoogleVertexAiTensorboard(scope Construct, id *string, config GoogleVertexAiTensorboardConfig) GoogleVertexAiTensorboard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig">GoogleVertexAiTensorboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig">GoogleVertexAiTensorboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleVertexAiTensorboardEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec">GoogleVertexAiTensorboardEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiTensorboardTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts">GoogleVertexAiTensorboardTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googlevertexaitensorboard"

googlevertexaitensorboard.GoogleVertexAiTensorboard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googlevertexaitensorboard"

googlevertexaitensorboard.GoogleVertexAiTensorboard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googlevertexaitensorboard"

googlevertexaitensorboard.GoogleVertexAiTensorboard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.blobStoragePathPrefix">BlobStoragePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference">GoogleVertexAiTensorboardEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.runCount">RunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference">GoogleVertexAiTensorboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec">GoogleVertexAiTensorboardEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlobStoragePathPrefix`<sup>Required</sup> <a name="BlobStoragePathPrefix" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.blobStoragePathPrefix"></a>

```go
func BlobStoragePathPrefix() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleVertexAiTensorboardEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference">GoogleVertexAiTensorboardEncryptionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RunCount`<sup>Required</sup> <a name="RunCount" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.runCount"></a>

```go
func RunCount() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiTensorboardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference">GoogleVertexAiTensorboardTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleVertexAiTensorboardEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec">GoogleVertexAiTensorboardEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiTensorboardConfig <a name="GoogleVertexAiTensorboardConfig" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googlevertexaitensorboard"

&googlevertexaitensorboard.GoogleVertexAiTensorboardConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Description: *string,
	EncryptionSpec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User provided name of this Tensorboard. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.description">Description</a></code> | <code>*string</code> | Description of this Tensorboard. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec">GoogleVertexAiTensorboardEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#id GoogleVertexAiTensorboard#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize your Tensorboards. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#project GoogleVertexAiTensorboard#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.region">Region</a></code> | <code>*string</code> | The region of the tensorboard. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts">GoogleVertexAiTensorboardTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User provided name of this Tensorboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#display_name GoogleVertexAiTensorboard#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of this Tensorboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#description GoogleVertexAiTensorboard#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleVertexAiTensorboardEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec">GoogleVertexAiTensorboardEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#encryption_spec GoogleVertexAiTensorboard#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#id GoogleVertexAiTensorboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize your Tensorboards.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#labels GoogleVertexAiTensorboard#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#project GoogleVertexAiTensorboard#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the tensorboard. eg us-central1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#region GoogleVertexAiTensorboard#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiTensorboardTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts">GoogleVertexAiTensorboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#timeouts GoogleVertexAiTensorboard#timeouts}

---

### GoogleVertexAiTensorboardEncryptionSpec <a name="GoogleVertexAiTensorboardEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googlevertexaitensorboard"

&googlevertexaitensorboard.GoogleVertexAiTensorboardEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#kms_key_name GoogleVertexAiTensorboard#kms_key_name}

---

### GoogleVertexAiTensorboardTimeouts <a name="GoogleVertexAiTensorboardTimeouts" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googlevertexaitensorboard"

&googlevertexaitensorboard.GoogleVertexAiTensorboardTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#create GoogleVertexAiTensorboard#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#delete GoogleVertexAiTensorboard#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#update GoogleVertexAiTensorboard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#create GoogleVertexAiTensorboard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#delete GoogleVertexAiTensorboard#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_tensorboard#update GoogleVertexAiTensorboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiTensorboardEncryptionSpecOutputReference <a name="GoogleVertexAiTensorboardEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googlevertexaitensorboard"

googlevertexaitensorboard.NewGoogleVertexAiTensorboardEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTensorboardEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec">GoogleVertexAiTensorboardEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTensorboardEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardEncryptionSpec">GoogleVertexAiTensorboardEncryptionSpec</a>

---


### GoogleVertexAiTensorboardTimeoutsOutputReference <a name="GoogleVertexAiTensorboardTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googlevertexaitensorboard"

googlevertexaitensorboard.NewGoogleVertexAiTensorboardTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTensorboardTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiTensorboard.GoogleVertexAiTensorboardTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



