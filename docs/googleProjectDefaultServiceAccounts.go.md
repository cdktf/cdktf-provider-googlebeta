# `google_project_default_service_accounts`

Refer to the Terraform Registory for docs: [`google_project_default_service_accounts`](https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts).

# `googleProjectDefaultServiceAccounts` Submodule <a name="`googleProjectDefaultServiceAccounts` Submodule" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectDefaultServiceAccounts <a name="GoogleProjectDefaultServiceAccounts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts google_project_default_service_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleprojectdefaultserviceaccounts"

googleprojectdefaultserviceaccounts.NewGoogleProjectDefaultServiceAccounts(scope Construct, id *string, config GoogleProjectDefaultServiceAccountsConfig) GoogleProjectDefaultServiceAccounts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig">GoogleProjectDefaultServiceAccountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig">GoogleProjectDefaultServiceAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetRestorePolicy">ResetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts"></a>

```go
func PutTimeouts(value GoogleProjectDefaultServiceAccountsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetId"></a>

```go
func ResetId()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetRestorePolicy"></a>

```go
func ResetRestorePolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleprojectdefaultserviceaccounts"

googleprojectdefaultserviceaccounts.GoogleProjectDefaultServiceAccounts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleprojectdefaultserviceaccounts"

googleprojectdefaultserviceaccounts.GoogleProjectDefaultServiceAccounts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleprojectdefaultserviceaccounts"

googleprojectdefaultserviceaccounts.GoogleProjectDefaultServiceAccounts_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.serviceAccounts">ServiceAccounts</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference">GoogleProjectDefaultServiceAccountsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicyInput">RestorePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicy">RestorePolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceAccounts`<sup>Required</sup> <a name="ServiceAccounts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.serviceAccounts"></a>

```go
func ServiceAccounts() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeouts"></a>

```go
func Timeouts() GoogleProjectDefaultServiceAccountsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference">GoogleProjectDefaultServiceAccountsTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicyInput"></a>

```go
func RestorePolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicy"></a>

```go
func RestorePolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectDefaultServiceAccountsConfig <a name="GoogleProjectDefaultServiceAccountsConfig" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleprojectdefaultserviceaccounts"

&googleprojectdefaultserviceaccounts.GoogleProjectDefaultServiceAccountsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Project: *string,
	Id: *string,
	RestorePolicy: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.action">Action</a></code> | <code>*string</code> | The action to be performed in the default service accounts. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.project">Project</a></code> | <code>*string</code> | The project ID where service accounts are created. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#id GoogleProjectDefaultServiceAccounts#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.restorePolicy">RestorePolicy</a></code> | <code>*string</code> | The action to be performed in the default service accounts on the resource destroy. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The action to be performed in the default service accounts.

Valid values are: DEPRIVILEGE, DELETE, DISABLE.
Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#action GoogleProjectDefaultServiceAccounts#action}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project ID where service accounts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#project GoogleProjectDefaultServiceAccounts#project}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#id GoogleProjectDefaultServiceAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.restorePolicy"></a>

```go
RestorePolicy *string
```

- *Type:* *string

The action to be performed in the default service accounts on the resource destroy.

Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#restore_policy GoogleProjectDefaultServiceAccounts#restore_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.timeouts"></a>

```go
Timeouts GoogleProjectDefaultServiceAccountsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#timeouts GoogleProjectDefaultServiceAccounts#timeouts}

---

### GoogleProjectDefaultServiceAccountsTimeouts <a name="GoogleProjectDefaultServiceAccountsTimeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleprojectdefaultserviceaccounts"

&googleprojectdefaultserviceaccounts.GoogleProjectDefaultServiceAccountsTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#create GoogleProjectDefaultServiceAccounts#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#delete GoogleProjectDefaultServiceAccounts#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#read GoogleProjectDefaultServiceAccounts#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#create GoogleProjectDefaultServiceAccounts#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#delete GoogleProjectDefaultServiceAccounts#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_project_default_service_accounts#read GoogleProjectDefaultServiceAccounts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectDefaultServiceAccountsTimeoutsOutputReference <a name="GoogleProjectDefaultServiceAccountsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleprojectdefaultserviceaccounts"

googleprojectdefaultserviceaccounts.NewGoogleProjectDefaultServiceAccountsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleProjectDefaultServiceAccountsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



