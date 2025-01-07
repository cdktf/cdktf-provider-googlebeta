# `googleNetworkSecurityGatewaySecurityPolicy` Submodule <a name="`googleNetworkSecurityGatewaySecurityPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicy <a name="GoogleNetworkSecurityGatewaySecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy google_network_security_gateway_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritygatewaysecuritypolicy"

googlenetworksecuritygatewaysecuritypolicy.NewGoogleNetworkSecurityGatewaySecurityPolicy(scope Construct, id *string, config GoogleNetworkSecurityGatewaySecurityPolicyConfig) GoogleNetworkSecurityGatewaySecurityPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig">GoogleNetworkSecurityGatewaySecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig">GoogleNetworkSecurityGatewaySecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetTlsInspectionPolicy">ResetTlsInspectionPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityGatewaySecurityPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsInspectionPolicy` <a name="ResetTlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetTlsInspectionPolicy"></a>

```go
func ResetTlsInspectionPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityGatewaySecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritygatewaysecuritypolicy"

googlenetworksecuritygatewaysecuritypolicy.GoogleNetworkSecurityGatewaySecurityPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritygatewaysecuritypolicy"

googlenetworksecuritygatewaysecuritypolicy.GoogleNetworkSecurityGatewaySecurityPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritygatewaysecuritypolicy"

googlenetworksecuritygatewaysecuritypolicy.GoogleNetworkSecurityGatewaySecurityPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritygatewaysecuritypolicy"

googlenetworksecuritygatewaysecuritypolicy.GoogleNetworkSecurityGatewaySecurityPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkSecurityGatewaySecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityGatewaySecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityGatewaySecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityGatewaySecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tlsInspectionPolicyInput">TlsInspectionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tlsInspectionPolicy">TlsInspectionPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsInspectionPolicyInput`<sup>Optional</sup> <a name="TlsInspectionPolicyInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tlsInspectionPolicyInput"></a>

```go
func TlsInspectionPolicyInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TlsInspectionPolicy`<sup>Required</sup> <a name="TlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tlsInspectionPolicy"></a>

```go
func TlsInspectionPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyConfig <a name="GoogleNetworkSecurityGatewaySecurityPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritygatewaysecuritypolicy"

&googlenetworksecuritygatewaysecuritypolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts,
	TlsInspectionPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy} gatewaySecurityPolicy should match the pattern:(^a-z?$). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#id GoogleNetworkSecurityGatewaySecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the gateway security policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#project GoogleNetworkSecurityGatewaySecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.tlsInspectionPolicy">TlsInspectionPolicy</a></code> | <code>*string</code> | Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy} gatewaySecurityPolicy should match the pattern:(^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#name GoogleNetworkSecurityGatewaySecurityPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#description GoogleNetworkSecurityGatewaySecurityPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#id GoogleNetworkSecurityGatewaySecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the gateway security policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#location GoogleNetworkSecurityGatewaySecurityPolicy#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#project GoogleNetworkSecurityGatewaySecurityPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityGatewaySecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#timeouts GoogleNetworkSecurityGatewaySecurityPolicy#timeouts}

---

##### `TlsInspectionPolicy`<sup>Optional</sup> <a name="TlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.tlsInspectionPolicy"></a>

```go
TlsInspectionPolicy *string
```

- *Type:* *string

Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it.

Note: google_network_security_tls_inspection_policy resource is still in [Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html) therefore it will need to import the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#tls_inspection_policy GoogleNetworkSecurityGatewaySecurityPolicy#tls_inspection_policy}

---

### GoogleNetworkSecurityGatewaySecurityPolicyTimeouts <a name="GoogleNetworkSecurityGatewaySecurityPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritygatewaysecuritypolicy"

&googlenetworksecuritygatewaysecuritypolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#create GoogleNetworkSecurityGatewaySecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#delete GoogleNetworkSecurityGatewaySecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#update GoogleNetworkSecurityGatewaySecurityPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#create GoogleNetworkSecurityGatewaySecurityPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#delete GoogleNetworkSecurityGatewaySecurityPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_gateway_security_policy#update GoogleNetworkSecurityGatewaySecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritygatewaysecuritypolicy"

googlenetworksecuritygatewaysecuritypolicy.NewGoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



