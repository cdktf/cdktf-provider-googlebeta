# `googleNetworkConnectivityServiceConnectionPolicy` Submodule <a name="`googleNetworkConnectivityServiceConnectionPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityServiceConnectionPolicy <a name="GoogleNetworkConnectivityServiceConnectionPolicy" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy google_network_connectivity_service_connection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.NewGoogleNetworkConnectivityServiceConnectionPolicy(scope Construct, id *string, config GoogleNetworkConnectivityServiceConnectionPolicyConfig) GoogleNetworkConnectivityServiceConnectionPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig">GoogleNetworkConnectivityServiceConnectionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig">GoogleNetworkConnectivityServiceConnectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig">PutPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetPscConfig">ResetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPscConfig` <a name="PutPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig"></a>

```go
func PutPscConfig(value GoogleNetworkConnectivityServiceConnectionPolicyPscConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkConnectivityServiceConnectionPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPscConfig` <a name="ResetPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetPscConfig"></a>

```go
func ResetPscConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkConnectivityServiceConnectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkConnectivityServiceConnectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityServiceConnectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.infrastructure">Infrastructure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConnections">PscConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfigInput">PscConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClassInput">ServiceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClass">ServiceClass</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Infrastructure`<sup>Required</sup> <a name="Infrastructure" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.infrastructure"></a>

```go
func Infrastructure() *string
```

- *Type:* *string

---

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfig"></a>

```go
func PscConfig() GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a>

---

##### `PscConnections`<sup>Required</sup> <a name="PscConnections" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConnections"></a>

```go
func PscConnections() GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PscConfigInput`<sup>Optional</sup> <a name="PscConfigInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfigInput"></a>

```go
func PscConfigInput() GoogleNetworkConnectivityServiceConnectionPolicyPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `ServiceClassInput`<sup>Optional</sup> <a name="ServiceClassInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClassInput"></a>

```go
func ServiceClassInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceClass`<sup>Required</sup> <a name="ServiceClass" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClass"></a>

```go
func ServiceClass() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityServiceConnectionPolicyConfig <a name="GoogleNetworkConnectivityServiceConnectionPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

&googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Network: *string,
	ServiceClass: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	PscConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.network">Network</a></code> | <code>*string</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass">ServiceClass</a></code> | <code>*string</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#location GoogleNetworkConnectivityServiceConnectionPolicy#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#name GoogleNetworkConnectivityServiceConnectionPolicy#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#network GoogleNetworkConnectivityServiceConnectionPolicy#network}

---

##### `ServiceClass`<sup>Required</sup> <a name="ServiceClass" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass"></a>

```go
ServiceClass *string
```

- *Type:* *string

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#service_class GoogleNetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#description GoogleNetworkConnectivityServiceConnectionPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#labels GoogleNetworkConnectivityServiceConnectionPolicy#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}.

---

##### `PscConfig`<sup>Optional</sup> <a name="PscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig"></a>

```go
PscConfig GoogleNetworkConnectivityServiceConnectionPolicyPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#psc_config GoogleNetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkConnectivityServiceConnectionPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#timeouts GoogleNetworkConnectivityServiceConnectionPolicy#timeouts}

---

### GoogleNetworkConnectivityServiceConnectionPolicyPscConfig <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

&googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig {
	Subnetworks: *[]*string,
	Limit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks">Subnetworks</a></code> | <code>*[]*string</code> | IDs of the subnetworks or fully qualified identifiers for the subnetworks. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.limit">Limit</a></code> | <code>*string</code> | Max number of PSC connections for this policy. |

---

##### `Subnetworks`<sup>Required</sup> <a name="Subnetworks" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks"></a>

```go
Subnetworks *[]*string
```

- *Type:* *[]*string

IDs of the subnetworks or fully qualified identifiers for the subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#subnetworks GoogleNetworkConnectivityServiceConnectionPolicy#subnetworks}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.limit"></a>

```go
Limit *string
```

- *Type:* *string

Max number of PSC connections for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#limit GoogleNetworkConnectivityServiceConnectionPolicy#limit}

---

### GoogleNetworkConnectivityServiceConnectionPolicyPscConnections <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnections" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

&googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections {

}
```


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

&googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError {

}
```


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

&googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo {

}
```


### GoogleNetworkConnectivityServiceConnectionPolicyTimeouts <a name="GoogleNetworkConnectivityServiceConnectionPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

&googlenetworkconnectivityserviceconnectionpolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#create GoogleNetworkConnectivityServiceConnectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#delete GoogleNetworkConnectivityServiceConnectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#update GoogleNetworkConnectivityServiceConnectionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#create GoogleNetworkConnectivityServiceConnectionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#delete GoogleNetworkConnectivityServiceConnectionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_service_connection_policy#update GoogleNetworkConnectivityServiceConnectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.NewGoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit"></a>

```go
func ResetLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput">LimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput">SubnetworksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit">Limit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks">Subnetworks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput"></a>

```go
func LimitInput() *string
```

- *Type:* *string

---

##### `SubnetworksInput`<sup>Optional</sup> <a name="SubnetworksInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput"></a>

```go
func SubnetworksInput() *[]*string
```

- *Type:* *[]*string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit"></a>

```go
func Limit() *string
```

- *Type:* *string

---

##### `Subnetworks`<sup>Required</sup> <a name="Subnetworks" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks"></a>

```go
func Subnetworks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkConnectivityServiceConnectionPolicyPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.NewGoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get"></a>

```go
func Get(index *f64) GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.NewGoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.NewGoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get"></a>

```go
func Get(index *f64) GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.NewGoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details">Details</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.NewGoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.get"></a>

```go
func Get(index *f64) GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.NewGoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress">ConsumerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule">ConsumerForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject">ConsumerTargetProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType">ErrorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation">GceOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections">GoogleNetworkConnectivityServiceConnectionPolicyPscConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerAddress`<sup>Required</sup> <a name="ConsumerAddress" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress"></a>

```go
func ConsumerAddress() *string
```

- *Type:* *string

---

##### `ConsumerForwardingRule`<sup>Required</sup> <a name="ConsumerForwardingRule" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule"></a>

```go
func ConsumerForwardingRule() *string
```

- *Type:* *string

---

##### `ConsumerTargetProject`<sup>Required</sup> <a name="ConsumerTargetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject"></a>

```go
func ConsumerTargetProject() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error"></a>

```go
func Error() GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a>

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo"></a>

```go
func ErrorInfo() GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a>

---

##### `ErrorType`<sup>Required</sup> <a name="ErrorType" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType"></a>

```go
func ErrorType() *string
```

- *Type:* *string

---

##### `GceOperation`<sup>Required</sup> <a name="GceOperation" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation"></a>

```go
func GceOperation() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkConnectivityServiceConnectionPolicyPscConnections
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections">GoogleNetworkConnectivityServiceConnectionPolicyPscConnections</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkconnectivityserviceconnectionpolicy"

googlenetworkconnectivityserviceconnectionpolicy.NewGoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



