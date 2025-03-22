# `googleNetworkSecurityBackendAuthenticationConfig` Submodule <a name="`googleNetworkSecurityBackendAuthenticationConfig` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityBackendAuthenticationConfig <a name="GoogleNetworkSecurityBackendAuthenticationConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config google_network_security_backend_authentication_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecuritybackendauthenticationconfig"

googlenetworksecuritybackendauthenticationconfig.NewGoogleNetworkSecurityBackendAuthenticationConfig(scope Construct, id *string, config GoogleNetworkSecurityBackendAuthenticationConfigConfig) GoogleNetworkSecurityBackendAuthenticationConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig">GoogleNetworkSecurityBackendAuthenticationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig">GoogleNetworkSecurityBackendAuthenticationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTrustConfig">ResetTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots">ResetWellKnownRoots</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityBackendAuthenticationConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

---

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrustConfig` <a name="ResetTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTrustConfig"></a>

```go
func ResetTrustConfig()
```

##### `ResetWellKnownRoots` <a name="ResetWellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots"></a>

```go
func ResetWellKnownRoots()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecuritybackendauthenticationconfig"

googlenetworksecuritybackendauthenticationconfig.GoogleNetworkSecurityBackendAuthenticationConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecuritybackendauthenticationconfig"

googlenetworksecuritybackendauthenticationconfig.GoogleNetworkSecurityBackendAuthenticationConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecuritybackendauthenticationconfig"

googlenetworksecuritybackendauthenticationconfig.GoogleNetworkSecurityBackendAuthenticationConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecuritybackendauthenticationconfig"

googlenetworksecuritybackendauthenticationconfig.GoogleNetworkSecurityBackendAuthenticationConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityBackendAuthenticationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityBackendAuthenticationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityBackendAuthenticationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfigInput">TrustConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput">WellKnownRootsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfig">TrustConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots">WellKnownRoots</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustConfigInput`<sup>Optional</sup> <a name="TrustConfigInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfigInput"></a>

```go
func TrustConfigInput() *string
```

- *Type:* *string

---

##### `WellKnownRootsInput`<sup>Optional</sup> <a name="WellKnownRootsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput"></a>

```go
func WellKnownRootsInput() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TrustConfig`<sup>Required</sup> <a name="TrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfig"></a>

```go
func TrustConfig() *string
```

- *Type:* *string

---

##### `WellKnownRoots`<sup>Required</sup> <a name="WellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots"></a>

```go
func WellKnownRoots() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityBackendAuthenticationConfigConfig <a name="GoogleNetworkSecurityBackendAuthenticationConfigConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecuritybackendauthenticationconfig"

&googlenetworksecuritybackendauthenticationconfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ClientCertificate: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts,
	TrustConfig: *string,
	WellKnownRoots: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.name">Name</a></code> | <code>*string</code> | Name of the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the backend authentication config. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig">TrustConfig</a></code> | <code>*string</code> | Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots">WellKnownRoots</a></code> | <code>*string</code> | Well known roots to use for server certificate validation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the BackendAuthenticationConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#name GoogleNetworkSecurityBackendAuthenticationConfig#name}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#client_certificate GoogleNetworkSecurityBackendAuthenticationConfig#client_certificate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#description GoogleNetworkSecurityBackendAuthenticationConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the BackendAuthenticationConfig resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#labels GoogleNetworkSecurityBackendAuthenticationConfig#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the backend authentication config. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#location GoogleNetworkSecurityBackendAuthenticationConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityBackendAuthenticationConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#timeouts GoogleNetworkSecurityBackendAuthenticationConfig#timeouts}

---

##### `TrustConfig`<sup>Optional</sup> <a name="TrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig"></a>

```go
TrustConfig *string
```

- *Type:* *string

Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#trust_config GoogleNetworkSecurityBackendAuthenticationConfig#trust_config}

---

##### `WellKnownRoots`<sup>Optional</sup> <a name="WellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots"></a>

```go
WellKnownRoots *string
```

- *Type:* *string

Well known roots to use for server certificate validation.

If set to NONE, the BackendService will only validate server certificates against roots specified in TrustConfig.
If set to PUBLIC_ROOTS, the BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend.
Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set. The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice. Possible values: ["NONE", "PUBLIC_ROOTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#well_known_roots GoogleNetworkSecurityBackendAuthenticationConfig#well_known_roots}

---

### GoogleNetworkSecurityBackendAuthenticationConfigTimeouts <a name="GoogleNetworkSecurityBackendAuthenticationConfigTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecuritybackendauthenticationconfig"

&googlenetworksecuritybackendauthenticationconfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#create GoogleNetworkSecurityBackendAuthenticationConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#delete GoogleNetworkSecurityBackendAuthenticationConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#update GoogleNetworkSecurityBackendAuthenticationConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#create GoogleNetworkSecurityBackendAuthenticationConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#delete GoogleNetworkSecurityBackendAuthenticationConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_backend_authentication_config#update GoogleNetworkSecurityBackendAuthenticationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference <a name="GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecuritybackendauthenticationconfig"

googlenetworksecuritybackendauthenticationconfig.NewGoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



