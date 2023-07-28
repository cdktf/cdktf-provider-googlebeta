# `google_gke_hub_feature`

Refer to the Terraform Registory for docs: [`google_gke_hub_feature`](https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature).

# `googleGkeHubFeature` Submodule <a name="`googleGkeHubFeature` Submodule" id="@cdktf/provider-google-beta.googleGkeHubFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubFeature <a name="GoogleGkeHubFeature" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature google_gke_hub_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeature(scope Construct, id *string, config GoogleGkeHubFeatureConfig) GoogleGkeHubFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig">GoogleGkeHubFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig">GoogleGkeHubFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putSpec"></a>

```go
func PutSpec(value GoogleGkeHubFeatureSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGkeHubFeatureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetSpec"></a>

```go
func ResetSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.GoogleGkeHubFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.GoogleGkeHubFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.GoogleGkeHubFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.resourceState">ResourceState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList">GoogleGkeHubFeatureResourceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference">GoogleGkeHubFeatureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.state">State</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList">GoogleGkeHubFeatureStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference">GoogleGkeHubFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `ResourceState`<sup>Required</sup> <a name="ResourceState" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.resourceState"></a>

```go
func ResourceState() GoogleGkeHubFeatureResourceStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList">GoogleGkeHubFeatureResourceStateList</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.spec"></a>

```go
func Spec() GoogleGkeHubFeatureSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference">GoogleGkeHubFeatureSpecOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.state"></a>

```go
func State() GoogleGkeHubFeatureStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList">GoogleGkeHubFeatureStateList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.timeouts"></a>

```go
func Timeouts() GoogleGkeHubFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference">GoogleGkeHubFeatureTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.specInput"></a>

```go
func SpecInput() GoogleGkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubFeatureConfig <a name="GoogleGkeHubFeatureConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	Labels: *map[string]*string,
	Name: *string,
	Project: *string,
	Spec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeature.GoogleGkeHubFeatureSpec,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#id GoogleGkeHubFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | GCP labels for this Feature. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.name">Name</a></code> | <code>*string</code> | The full, unique name of this Feature resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#project GoogleGkeHubFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#location GoogleGkeHubFeature#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#id GoogleGkeHubFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

GCP labels for this Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#labels GoogleGkeHubFeature#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The full, unique name of this Feature resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#name GoogleGkeHubFeature#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#project GoogleGkeHubFeature#project}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.spec"></a>

```go
Spec GoogleGkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#spec GoogleGkeHubFeature#spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.timeouts"></a>

```go
Timeouts GoogleGkeHubFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#timeouts GoogleGkeHubFeature#timeouts}

---

### GoogleGkeHubFeatureResourceState <a name="GoogleGkeHubFeatureResourceState" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureResourceState {

}
```


### GoogleGkeHubFeatureSpec <a name="GoogleGkeHubFeatureSpec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureSpec {
	Fleetobservability: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability,
	Multiclusteringress: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.property.fleetobservability">Fleetobservability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a></code> | fleetobservability block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.property.multiclusteringress">Multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a></code> | multiclusteringress block. |

---

##### `Fleetobservability`<sup>Optional</sup> <a name="Fleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.property.fleetobservability"></a>

```go
Fleetobservability GoogleGkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a>

fleetobservability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#fleetobservability GoogleGkeHubFeature#fleetobservability}

---

##### `Multiclusteringress`<sup>Optional</sup> <a name="Multiclusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.property.multiclusteringress"></a>

```go
Multiclusteringress GoogleGkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a>

multiclusteringress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#multiclusteringress GoogleGkeHubFeature#multiclusteringress}

---

### GoogleGkeHubFeatureSpecFleetobservability <a name="GoogleGkeHubFeatureSpecFleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureSpecFleetobservability {
	LoggingConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | logging_config block. |

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability.property.loggingConfig"></a>

```go
LoggingConfig GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#logging_config GoogleGkeHubFeature#logging_config}

---

### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig {
	DefaultConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig,
	FleetScopeLogsConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | default_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig">FleetScopeLogsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | fleet_scope_logs_config block. |

---

##### `DefaultConfig`<sup>Optional</sup> <a name="DefaultConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig"></a>

```go
DefaultConfig GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

default_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#default_config GoogleGkeHubFeature#default_config}

---

##### `FleetScopeLogsConfig`<sup>Optional</sup> <a name="FleetScopeLogsConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig"></a>

```go
FleetScopeLogsConfig GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

fleet_scope_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#fleet_scope_logs_config GoogleGkeHubFeature#fleet_scope_logs_config}

---

### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode">Mode</a></code> | <code>*string</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}

---

### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode">Mode</a></code> | <code>*string</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}

---

### GoogleGkeHubFeatureSpecMulticlusteringress <a name="GoogleGkeHubFeatureSpecMulticlusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureSpecMulticlusteringress {
	ConfigMembership: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress.property.configMembership">ConfigMembership</a></code> | <code>*string</code> | Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'. |

---

##### `ConfigMembership`<sup>Required</sup> <a name="ConfigMembership" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress.property.configMembership"></a>

```go
ConfigMembership *string
```

- *Type:* *string

Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#config_membership GoogleGkeHubFeature#config_membership}

---

### GoogleGkeHubFeatureState <a name="GoogleGkeHubFeatureState" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureState {

}
```


### GoogleGkeHubFeatureStateState <a name="GoogleGkeHubFeatureStateState" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureStateState {

}
```


### GoogleGkeHubFeatureTimeouts <a name="GoogleGkeHubFeatureTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

&googlegkehubfeature.GoogleGkeHubFeatureTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#create GoogleGkeHubFeature#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#delete GoogleGkeHubFeature#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#update GoogleGkeHubFeature#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#create GoogleGkeHubFeature#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#delete GoogleGkeHubFeature#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_gke_hub_feature#update GoogleGkeHubFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubFeatureResourceStateList <a name="GoogleGkeHubFeatureResourceStateList" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureResourceStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeHubFeatureResourceStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.get"></a>

```go
func Get(index *f64) GoogleGkeHubFeatureResourceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeHubFeatureResourceStateOutputReference <a name="GoogleGkeHubFeatureResourceStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureResourceStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeHubFeatureResourceStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.hasResources">HasResources</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceState">GoogleGkeHubFeatureResourceState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HasResources`<sup>Required</sup> <a name="HasResources" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.hasResources"></a>

```go
func HasResources() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureResourceState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceState">GoogleGkeHubFeatureResourceState</a>

---


### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---


### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---


### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig">PutDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig">PutFleetScopeLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig">ResetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig">ResetFleetScopeLogsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultConfig` <a name="PutDefaultConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig"></a>

```go
func PutDefaultConfig(value GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---

##### `PutFleetScopeLogsConfig` <a name="PutFleetScopeLogsConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig"></a>

```go
func PutFleetScopeLogsConfig(value GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---

##### `ResetDefaultConfig` <a name="ResetDefaultConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig"></a>

```go
func ResetDefaultConfig()
```

##### `ResetFleetScopeLogsConfig` <a name="ResetFleetScopeLogsConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig"></a>

```go
func ResetFleetScopeLogsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig">FleetScopeLogsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput">DefaultConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput">FleetScopeLogsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig"></a>

```go
func DefaultConfig() GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a>

---

##### `FleetScopeLogsConfig`<sup>Required</sup> <a name="FleetScopeLogsConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig"></a>

```go
func FleetScopeLogsConfig() GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a>

---

##### `DefaultConfigInput`<sup>Optional</sup> <a name="DefaultConfigInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput"></a>

```go
func DefaultConfigInput() GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---

##### `FleetScopeLogsConfigInput`<sup>Optional</sup> <a name="FleetScopeLogsConfigInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput"></a>

```go
func FleetScopeLogsConfigInput() GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---


### GoogleGkeHubFeatureSpecFleetobservabilityOutputReference <a name="GoogleGkeHubFeatureSpecFleetobservabilityOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureSpecFleetobservabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureSpecFleetobservabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig"></a>

```go
func PutLoggingConfig(value GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig"></a>

```go
func LoggingConfig() GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a>

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a>

---


### GoogleGkeHubFeatureSpecMulticlusteringressOutputReference <a name="GoogleGkeHubFeatureSpecMulticlusteringressOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureSpecMulticlusteringressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureSpecMulticlusteringressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput">ConfigMembershipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership">ConfigMembership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigMembershipInput`<sup>Optional</sup> <a name="ConfigMembershipInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput"></a>

```go
func ConfigMembershipInput() *string
```

- *Type:* *string

---

##### `ConfigMembership`<sup>Required</sup> <a name="ConfigMembership" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership"></a>

```go
func ConfigMembership() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a>

---


### GoogleGkeHubFeatureSpecOutputReference <a name="GoogleGkeHubFeatureSpecOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putFleetobservability">PutFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putMulticlusteringress">PutMulticlusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resetFleetobservability">ResetFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resetMulticlusteringress">ResetMulticlusteringress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFleetobservability` <a name="PutFleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putFleetobservability"></a>

```go
func PutFleetobservability(value GoogleGkeHubFeatureSpecFleetobservability)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putFleetobservability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a>

---

##### `PutMulticlusteringress` <a name="PutMulticlusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putMulticlusteringress"></a>

```go
func PutMulticlusteringress(value GoogleGkeHubFeatureSpecMulticlusteringress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putMulticlusteringress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a>

---

##### `ResetFleetobservability` <a name="ResetFleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resetFleetobservability"></a>

```go
func ResetFleetobservability()
```

##### `ResetMulticlusteringress` <a name="ResetMulticlusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resetMulticlusteringress"></a>

```go
func ResetMulticlusteringress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fleetobservability">Fleetobservability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.multiclusteringress">Multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference">GoogleGkeHubFeatureSpecMulticlusteringressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fleetobservabilityInput">FleetobservabilityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.multiclusteringressInput">MulticlusteringressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fleetobservability`<sup>Required</sup> <a name="Fleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fleetobservability"></a>

```go
func Fleetobservability() GoogleGkeHubFeatureSpecFleetobservabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityOutputReference</a>

---

##### `Multiclusteringress`<sup>Required</sup> <a name="Multiclusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.multiclusteringress"></a>

```go
func Multiclusteringress() GoogleGkeHubFeatureSpecMulticlusteringressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference">GoogleGkeHubFeatureSpecMulticlusteringressOutputReference</a>

---

##### `FleetobservabilityInput`<sup>Optional</sup> <a name="FleetobservabilityInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fleetobservabilityInput"></a>

```go
func FleetobservabilityInput() GoogleGkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a>

---

##### `MulticlusteringressInput`<sup>Optional</sup> <a name="MulticlusteringressInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.multiclusteringressInput"></a>

```go
func MulticlusteringressInput() GoogleGkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a>

---


### GoogleGkeHubFeatureStateList <a name="GoogleGkeHubFeatureStateList" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeHubFeatureStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.get"></a>

```go
func Get(index *f64) GoogleGkeHubFeatureStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeHubFeatureStateOutputReference <a name="GoogleGkeHubFeatureStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeHubFeatureStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.state">State</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList">GoogleGkeHubFeatureStateStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureState">GoogleGkeHubFeatureState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.state"></a>

```go
func State() GoogleGkeHubFeatureStateStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList">GoogleGkeHubFeatureStateStateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureState">GoogleGkeHubFeatureState</a>

---


### GoogleGkeHubFeatureStateStateList <a name="GoogleGkeHubFeatureStateStateList" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureStateStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeHubFeatureStateStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.get"></a>

```go
func Get(index *f64) GoogleGkeHubFeatureStateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeHubFeatureStateStateOutputReference <a name="GoogleGkeHubFeatureStateStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureStateStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeHubFeatureStateStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateState">GoogleGkeHubFeatureStateState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureStateState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateState">GoogleGkeHubFeatureStateState</a>

---


### GoogleGkeHubFeatureTimeoutsOutputReference <a name="GoogleGkeHubFeatureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeature"

googlegkehubfeature.NewGoogleGkeHubFeatureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



