# `googleVmwareengineNetworkPolicy` Submodule <a name="`googleVmwareengineNetworkPolicy` Submodule" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineNetworkPolicy <a name="GoogleVmwareengineNetworkPolicy" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy google_vmwareengine_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

googlevmwareenginenetworkpolicy.NewGoogleVmwareengineNetworkPolicy(scope Construct, id *string, config GoogleVmwareengineNetworkPolicyConfig) GoogleVmwareengineNetworkPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig">GoogleVmwareengineNetworkPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig">GoogleVmwareengineNetworkPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putExternalIp">PutExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putInternetAccess">PutInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetExternalIp">ResetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetInternetAccess">ResetInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalIp` <a name="PutExternalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putExternalIp"></a>

```go
func PutExternalIp(value GoogleVmwareengineNetworkPolicyExternalIp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putExternalIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a>

---

##### `PutInternetAccess` <a name="PutInternetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putInternetAccess"></a>

```go
func PutInternetAccess(value GoogleVmwareengineNetworkPolicyInternetAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putInternetAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVmwareengineNetworkPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalIp` <a name="ResetExternalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetExternalIp"></a>

```go
func ResetExternalIp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetInternetAccess` <a name="ResetInternetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetInternetAccess"></a>

```go
func ResetInternetAccess()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

googlevmwareenginenetworkpolicy.GoogleVmwareengineNetworkPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

googlevmwareenginenetworkpolicy.GoogleVmwareengineNetworkPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

googlevmwareenginenetworkpolicy.GoogleVmwareengineNetworkPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

googlevmwareenginenetworkpolicy.GoogleVmwareengineNetworkPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleVmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVmwareengineNetworkPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVmwareengineNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.externalIp">ExternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference">GoogleVmwareengineNetworkPolicyExternalIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference">GoogleVmwareengineNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference">GoogleVmwareengineNetworkPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical">VmwareEngineNetworkCanonical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.edgeServicesCidrInput">EdgeServicesCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.externalIpInput">ExternalIpInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.internetAccessInput">InternetAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkInput">VmwareEngineNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.edgeServicesCidr">EdgeServicesCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.externalIp"></a>

```go
func ExternalIp() GoogleVmwareengineNetworkPolicyExternalIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference">GoogleVmwareengineNetworkPolicyExternalIpOutputReference</a>

---

##### `InternetAccess`<sup>Required</sup> <a name="InternetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.internetAccess"></a>

```go
func InternetAccess() GoogleVmwareengineNetworkPolicyInternetAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference">GoogleVmwareengineNetworkPolicyInternetAccessOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleVmwareengineNetworkPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference">GoogleVmwareengineNetworkPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VmwareEngineNetworkCanonical`<sup>Required</sup> <a name="VmwareEngineNetworkCanonical" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical"></a>

```go
func VmwareEngineNetworkCanonical() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EdgeServicesCidrInput`<sup>Optional</sup> <a name="EdgeServicesCidrInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.edgeServicesCidrInput"></a>

```go
func EdgeServicesCidrInput() *string
```

- *Type:* *string

---

##### `ExternalIpInput`<sup>Optional</sup> <a name="ExternalIpInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.externalIpInput"></a>

```go
func ExternalIpInput() GoogleVmwareengineNetworkPolicyExternalIp
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternetAccessInput`<sup>Optional</sup> <a name="InternetAccessInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.internetAccessInput"></a>

```go
func InternetAccessInput() GoogleVmwareengineNetworkPolicyInternetAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmwareEngineNetworkInput`<sup>Optional</sup> <a name="VmwareEngineNetworkInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkInput"></a>

```go
func VmwareEngineNetworkInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EdgeServicesCidr`<sup>Required</sup> <a name="EdgeServicesCidr" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.edgeServicesCidr"></a>

```go
func EdgeServicesCidr() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetwork"></a>

```go
func VmwareEngineNetwork() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineNetworkPolicyConfig <a name="GoogleVmwareengineNetworkPolicyConfig" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

&googlevmwareenginenetworkpolicy.GoogleVmwareengineNetworkPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EdgeServicesCidr: *string,
	Location: *string,
	Name: *string,
	VmwareEngineNetwork: *string,
	Description: *string,
	ExternalIp: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp,
	Id: *string,
	InternetAccess: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.edgeServicesCidr">EdgeServicesCidr</a></code> | <code>*string</code> | IP address range in CIDR notation used to create internet access and external IP access. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>*string</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description for this network policy. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.externalIp">ExternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a></code> | external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#id GoogleVmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a></code> | internet_access block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#project GoogleVmwareengineNetworkPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EdgeServicesCidr`<sup>Required</sup> <a name="EdgeServicesCidr" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.edgeServicesCidr"></a>

```go
EdgeServicesCidr *string
```

- *Type:* *string

IP address range in CIDR notation used to create internet access and external IP access.

An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#edge_services_cidr GoogleVmwareengineNetworkPolicy#edge_services_cidr}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#location GoogleVmwareengineNetworkPolicy#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#name GoogleVmwareengineNetworkPolicy#name}

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork"></a>

```go
VmwareEngineNetwork *string
```

- *Type:* *string

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#vmware_engine_network GoogleVmwareengineNetworkPolicy#vmware_engine_network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description for this network policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#description GoogleVmwareengineNetworkPolicy#description}

---

##### `ExternalIp`<sup>Optional</sup> <a name="ExternalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.externalIp"></a>

```go
ExternalIp GoogleVmwareengineNetworkPolicyExternalIp
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a>

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#external_ip GoogleVmwareengineNetworkPolicy#external_ip}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#id GoogleVmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetAccess`<sup>Optional</sup> <a name="InternetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.internetAccess"></a>

```go
InternetAccess GoogleVmwareengineNetworkPolicyInternetAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a>

internet_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#internet_access GoogleVmwareengineNetworkPolicy#internet_access}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#project GoogleVmwareengineNetworkPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleVmwareengineNetworkPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#timeouts GoogleVmwareengineNetworkPolicy#timeouts}

---

### GoogleVmwareengineNetworkPolicyExternalIp <a name="GoogleVmwareengineNetworkPolicyExternalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

&googlevmwareenginenetworkpolicy.GoogleVmwareengineNetworkPolicyExternalIp {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp.property.enabled">Enabled</a></code> | <code>interface{}</code> | True if the service is enabled; false otherwise. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#enabled GoogleVmwareengineNetworkPolicy#enabled}

---

### GoogleVmwareengineNetworkPolicyInternetAccess <a name="GoogleVmwareengineNetworkPolicyInternetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

&googlevmwareenginenetworkpolicy.GoogleVmwareengineNetworkPolicyInternetAccess {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess.property.enabled">Enabled</a></code> | <code>interface{}</code> | True if the service is enabled; false otherwise. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#enabled GoogleVmwareengineNetworkPolicy#enabled}

---

### GoogleVmwareengineNetworkPolicyTimeouts <a name="GoogleVmwareengineNetworkPolicyTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

&googlevmwareenginenetworkpolicy.GoogleVmwareengineNetworkPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#create GoogleVmwareengineNetworkPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#delete GoogleVmwareengineNetworkPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#update GoogleVmwareengineNetworkPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#create GoogleVmwareengineNetworkPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#delete GoogleVmwareengineNetworkPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#update GoogleVmwareengineNetworkPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineNetworkPolicyExternalIpOutputReference <a name="GoogleVmwareengineNetworkPolicyExternalIpOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

googlevmwareenginenetworkpolicy.NewGoogleVmwareengineNetworkPolicyExternalIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareengineNetworkPolicyExternalIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareengineNetworkPolicyExternalIp
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a>

---


### GoogleVmwareengineNetworkPolicyInternetAccessOutputReference <a name="GoogleVmwareengineNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

googlevmwareenginenetworkpolicy.NewGoogleVmwareengineNetworkPolicyInternetAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareengineNetworkPolicyInternetAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareengineNetworkPolicyInternetAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a>

---


### GoogleVmwareengineNetworkPolicyTimeoutsOutputReference <a name="GoogleVmwareengineNetworkPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevmwareenginenetworkpolicy"

googlevmwareenginenetworkpolicy.NewGoogleVmwareengineNetworkPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareengineNetworkPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



