# `google_assured_workloads_workload`

Refer to the Terraform Registory for docs: [`google_assured_workloads_workload`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload).

# `googleAssuredWorkloadsWorkload` Submodule <a name="`googleAssuredWorkloadsWorkload` Submodule" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAssuredWorkloadsWorkload <a name="GoogleAssuredWorkloadsWorkload" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload google_assured_workloads_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.NewGoogleAssuredWorkloadsWorkload(scope Construct, id *string, config GoogleAssuredWorkloadsWorkloadConfig) GoogleAssuredWorkloadsWorkload
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig">GoogleAssuredWorkloadsWorkloadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig">GoogleAssuredWorkloadsWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putKmsSettings">PutKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putResourceSettings">PutResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetKmsSettings">ResetKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetProvisionedResourcesParent">ResetProvisionedResourcesParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetResourceSettings">ResetResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutKmsSettings` <a name="PutKmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putKmsSettings"></a>

```go
func PutKmsSettings(value GoogleAssuredWorkloadsWorkloadKmsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putKmsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

---

##### `PutResourceSettings` <a name="PutResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putResourceSettings"></a>

```go
func PutResourceSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putResourceSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAssuredWorkloadsWorkloadTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsSettings` <a name="ResetKmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetKmsSettings"></a>

```go
func ResetKmsSettings()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProvisionedResourcesParent` <a name="ResetProvisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetProvisionedResourcesParent"></a>

```go
func ResetProvisionedResourcesParent()
```

##### `ResetResourceSettings` <a name="ResetResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetResourceSettings"></a>

```go
func ResetResourceSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.GoogleAssuredWorkloadsWorkload_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.GoogleAssuredWorkloadsWorkload_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.GoogleAssuredWorkloadsWorkload_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettings">KmsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference">GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList">GoogleAssuredWorkloadsWorkloadResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettings">ResourceSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList">GoogleAssuredWorkloadsWorkloadResourceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference">GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccountInput">BillingAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegimeInput">ComplianceRegimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettingsInput">KmsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParentInput">ProvisionedResourcesParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettingsInput">ResourceSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegime">ComplianceRegime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParent">ProvisionedResourcesParent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `KmsSettings`<sup>Required</sup> <a name="KmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettings"></a>

```go
func KmsSettings() GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference">GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resources"></a>

```go
func Resources() GoogleAssuredWorkloadsWorkloadResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList">GoogleAssuredWorkloadsWorkloadResourcesList</a>

---

##### `ResourceSettings`<sup>Required</sup> <a name="ResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettings"></a>

```go
func ResourceSettings() GoogleAssuredWorkloadsWorkloadResourceSettingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList">GoogleAssuredWorkloadsWorkloadResourceSettingsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeouts"></a>

```go
func Timeouts() GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference">GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference</a>

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccountInput"></a>

```go
func BillingAccountInput() *string
```

- *Type:* *string

---

##### `ComplianceRegimeInput`<sup>Optional</sup> <a name="ComplianceRegimeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegimeInput"></a>

```go
func ComplianceRegimeInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsSettingsInput`<sup>Optional</sup> <a name="KmsSettingsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettingsInput"></a>

```go
func KmsSettingsInput() GoogleAssuredWorkloadsWorkloadKmsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `ProvisionedResourcesParentInput`<sup>Optional</sup> <a name="ProvisionedResourcesParentInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParentInput"></a>

```go
func ProvisionedResourcesParentInput() *string
```

- *Type:* *string

---

##### `ResourceSettingsInput`<sup>Optional</sup> <a name="ResourceSettingsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettingsInput"></a>

```go
func ResourceSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccount"></a>

```go
func BillingAccount() *string
```

- *Type:* *string

---

##### `ComplianceRegime`<sup>Required</sup> <a name="ComplianceRegime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegime"></a>

```go
func ComplianceRegime() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `ProvisionedResourcesParent`<sup>Required</sup> <a name="ProvisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParent"></a>

```go
func ProvisionedResourcesParent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAssuredWorkloadsWorkloadConfig <a name="GoogleAssuredWorkloadsWorkloadConfig" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

&googleassuredworkloadsworkload.GoogleAssuredWorkloadsWorkloadConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingAccount: *string,
	ComplianceRegime: *string,
	DisplayName: *string,
	Location: *string,
	Organization: *string,
	Id: *string,
	KmsSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings,
	Labels: *map[string]*string,
	ProvisionedResourcesParent: *string,
	ResourceSettings: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.complianceRegime">ComplianceRegime</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#id GoogleAssuredWorkloadsWorkload#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.kmsSettings">KmsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | kms_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels applied to the workload. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent">ProvisionedResourcesParent</a></code> | <code>*string</code> | Input only. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.resourceSettings">ResourceSettings</a></code> | <code>interface{}</code> | resource_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.billingAccount"></a>

```go
BillingAccount *string
```

- *Type:* *string

Required.

Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, 'billingAccounts/012345-567890-ABCDEF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#billing_account GoogleAssuredWorkloadsWorkload#billing_account}

---

##### `ComplianceRegime`<sup>Required</sup> <a name="ComplianceRegime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.complianceRegime"></a>

```go
ComplianceRegime *string
```

- *Type:* *string

Required.

Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#compliance_regime GoogleAssuredWorkloadsWorkload#compliance_regime}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required.

The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#display_name GoogleAssuredWorkloadsWorkload#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#location GoogleAssuredWorkloadsWorkload#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#organization GoogleAssuredWorkloadsWorkload#organization}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#id GoogleAssuredWorkloadsWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsSettings`<sup>Optional</sup> <a name="KmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.kmsSettings"></a>

```go
KmsSettings GoogleAssuredWorkloadsWorkloadKmsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

kms_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#kms_settings GoogleAssuredWorkloadsWorkload#kms_settings}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels applied to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#labels GoogleAssuredWorkloadsWorkload#labels}

---

##### `ProvisionedResourcesParent`<sup>Optional</sup> <a name="ProvisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent"></a>

```go
ProvisionedResourcesParent *string
```

- *Type:* *string

Input only.

The parent resource for the resources managed by this Assured Workload. May be either an organization or a folder. Must be the same or a child of the Workload parent. If not specified all resources are created under the Workload parent. Formats: folders/{folder_id}, organizations/{organization_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#provisioned_resources_parent GoogleAssuredWorkloadsWorkload#provisioned_resources_parent}

---

##### `ResourceSettings`<sup>Optional</sup> <a name="ResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.resourceSettings"></a>

```go
ResourceSettings interface{}
```

- *Type:* interface{}

resource_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#resource_settings GoogleAssuredWorkloadsWorkload#resource_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.timeouts"></a>

```go
Timeouts GoogleAssuredWorkloadsWorkloadTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#timeouts GoogleAssuredWorkloadsWorkload#timeouts}

---

### GoogleAssuredWorkloadsWorkloadKmsSettings <a name="GoogleAssuredWorkloadsWorkloadKmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

&googleassuredworkloadsworkload.GoogleAssuredWorkloadsWorkloadKmsSettings {
	NextRotationTime: *string,
	RotationPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime">NextRotationTime</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | Required. |

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime"></a>

```go
NextRotationTime *string
```

- *Type:* *string

Required.

Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#next_rotation_time GoogleAssuredWorkloadsWorkload#next_rotation_time}

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod"></a>

```go
RotationPeriod *string
```

- *Type:* *string

Required.

Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#rotation_period GoogleAssuredWorkloadsWorkload#rotation_period}

---

### GoogleAssuredWorkloadsWorkloadResources <a name="GoogleAssuredWorkloadsWorkloadResources" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

&googleassuredworkloadsworkload.GoogleAssuredWorkloadsWorkloadResources {

}
```


### GoogleAssuredWorkloadsWorkloadResourceSettings <a name="GoogleAssuredWorkloadsWorkloadResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

&googleassuredworkloadsworkload.GoogleAssuredWorkloadsWorkloadResourceSettings {
	ResourceId: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceId">ResourceId</a></code> | <code>*string</code> | Resource identifier. For a project this represents project_number. If the project is already taken, the workload creation will fail. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceType">ResourceType</a></code> | <code>*string</code> | Indicates the type of resource. |

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Resource identifier. For a project this represents project_number. If the project is already taken, the workload creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#resource_id GoogleAssuredWorkloadsWorkload#resource_id}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Indicates the type of resource.

This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#resource_type GoogleAssuredWorkloadsWorkload#resource_type}

---

### GoogleAssuredWorkloadsWorkloadTimeouts <a name="GoogleAssuredWorkloadsWorkloadTimeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

&googleassuredworkloadsworkload.GoogleAssuredWorkloadsWorkloadTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#create GoogleAssuredWorkloadsWorkload#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#delete GoogleAssuredWorkloadsWorkload#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#update GoogleAssuredWorkloadsWorkload#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#create GoogleAssuredWorkloadsWorkload#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#delete GoogleAssuredWorkloadsWorkload#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_assured_workloads_workload#update GoogleAssuredWorkloadsWorkload#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference <a name="GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.NewGoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput">NextRotationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NextRotationTimeInput`<sup>Optional</sup> <a name="NextRotationTimeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput"></a>

```go
func NextRotationTimeInput() *string
```

- *Type:* *string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *string
```

- *Type:* *string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime"></a>

```go
func NextRotationTime() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod"></a>

```go
func RotationPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAssuredWorkloadsWorkloadKmsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

---


### GoogleAssuredWorkloadsWorkloadResourceSettingsList <a name="GoogleAssuredWorkloadsWorkloadResourceSettingsList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.NewGoogleAssuredWorkloadsWorkloadResourceSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAssuredWorkloadsWorkloadResourceSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.get"></a>

```go
func Get(index *f64) GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference <a name="GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.NewGoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAssuredWorkloadsWorkloadResourcesList <a name="GoogleAssuredWorkloadsWorkloadResourcesList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.NewGoogleAssuredWorkloadsWorkloadResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAssuredWorkloadsWorkloadResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.get"></a>

```go
func Get(index *f64) GoogleAssuredWorkloadsWorkloadResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAssuredWorkloadsWorkloadResourcesOutputReference <a name="GoogleAssuredWorkloadsWorkloadResourcesOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.NewGoogleAssuredWorkloadsWorkloadResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAssuredWorkloadsWorkloadResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources">GoogleAssuredWorkloadsWorkloadResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId"></a>

```go
func ResourceId() *f64
```

- *Type:* *f64

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAssuredWorkloadsWorkloadResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources">GoogleAssuredWorkloadsWorkloadResources</a>

---


### GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference <a name="GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleassuredworkloadsworkload"

googleassuredworkloadsworkload.NewGoogleAssuredWorkloadsWorkloadTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



