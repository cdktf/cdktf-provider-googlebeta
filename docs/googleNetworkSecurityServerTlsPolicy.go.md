# `googleNetworkSecurityServerTlsPolicy` Submodule <a name="`googleNetworkSecurityServerTlsPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityServerTlsPolicy <a name="GoogleNetworkSecurityServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy google_network_security_server_tls_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicy(scope Construct, id *string, config GoogleNetworkSecurityServerTlsPolicyConfig) GoogleNetworkSecurityServerTlsPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig">GoogleNetworkSecurityServerTlsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig">GoogleNetworkSecurityServerTlsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putMtlsPolicy">PutMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putServerCertificate">PutServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetAllowOpen">ResetAllowOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetMtlsPolicy">ResetMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetServerCertificate">ResetServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMtlsPolicy` <a name="PutMtlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putMtlsPolicy"></a>

```go
func PutMtlsPolicy(value GoogleNetworkSecurityServerTlsPolicyMtlsPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putMtlsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a>

---

##### `PutServerCertificate` <a name="PutServerCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putServerCertificate"></a>

```go
func PutServerCertificate(value GoogleNetworkSecurityServerTlsPolicyServerCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putServerCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityServerTlsPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a>

---

##### `ResetAllowOpen` <a name="ResetAllowOpen" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetAllowOpen"></a>

```go
func ResetAllowOpen()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMtlsPolicy` <a name="ResetMtlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetMtlsPolicy"></a>

```go
func ResetMtlsPolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServerCertificate` <a name="ResetServerCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetServerCertificate"></a>

```go
func ResetServerCertificate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityServerTlsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkSecurityServerTlsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityServerTlsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityServerTlsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityServerTlsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.mtlsPolicy">MtlsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.allowOpenInput">AllowOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.mtlsPolicyInput">MtlsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.serverCertificateInput">ServerCertificateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.allowOpen">AllowOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MtlsPolicy`<sup>Required</sup> <a name="MtlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.mtlsPolicy"></a>

```go
func MtlsPolicy() GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference</a>

---

##### `ServerCertificate`<sup>Required</sup> <a name="ServerCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.serverCertificate"></a>

```go
func ServerCertificate() GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AllowOpenInput`<sup>Optional</sup> <a name="AllowOpenInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.allowOpenInput"></a>

```go
func AllowOpenInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MtlsPolicyInput`<sup>Optional</sup> <a name="MtlsPolicyInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.mtlsPolicyInput"></a>

```go
func MtlsPolicyInput() GoogleNetworkSecurityServerTlsPolicyMtlsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServerCertificateInput`<sup>Optional</sup> <a name="ServerCertificateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.serverCertificateInput"></a>

```go
func ServerCertificateInput() GoogleNetworkSecurityServerTlsPolicyServerCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowOpen`<sup>Required</sup> <a name="AllowOpen" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.allowOpen"></a>

```go
func AllowOpen() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityServerTlsPolicyConfig <a name="GoogleNetworkSecurityServerTlsPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

&googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowOpen: interface{},
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	MtlsPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy,
	Project: *string,
	ServerCertificate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.allowOpen">AllowOpen</a></code> | <code>interface{}</code> | This field applies only for Traffic Director policies. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#id GoogleNetworkSecurityServerTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the server tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.mtlsPolicy">MtlsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | mtls_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#project GoogleNetworkSecurityServerTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a></code> | server_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the ServerTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#name GoogleNetworkSecurityServerTlsPolicy#name}

---

##### `AllowOpen`<sup>Optional</sup> <a name="AllowOpen" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.allowOpen"></a>

```go
AllowOpen interface{}
```

- *Type:* interface{}

This field applies only for Traffic Director policies.

It is must be set to false for external HTTPS load balancer policies.
Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#allow_open GoogleNetworkSecurityServerTlsPolicy#allow_open}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#description GoogleNetworkSecurityServerTlsPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#id GoogleNetworkSecurityServerTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the ServerTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#labels GoogleNetworkSecurityServerTlsPolicy#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the server tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#location GoogleNetworkSecurityServerTlsPolicy#location}

---

##### `MtlsPolicy`<sup>Optional</sup> <a name="MtlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.mtlsPolicy"></a>

```go
MtlsPolicy GoogleNetworkSecurityServerTlsPolicyMtlsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a>

mtls_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#mtls_policy GoogleNetworkSecurityServerTlsPolicy#mtls_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#project GoogleNetworkSecurityServerTlsPolicy#project}.

---

##### `ServerCertificate`<sup>Optional</sup> <a name="ServerCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.serverCertificate"></a>

```go
ServerCertificate GoogleNetworkSecurityServerTlsPolicyServerCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#server_certificate GoogleNetworkSecurityServerTlsPolicy#server_certificate}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityServerTlsPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#timeouts GoogleNetworkSecurityServerTlsPolicy#timeouts}

---

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicy <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

&googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy {
	ClientValidationCa: interface{},
	ClientValidationMode: *string,
	ClientValidationTrustConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationCa">ClientValidationCa</a></code> | <code>interface{}</code> | client_validation_ca block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationMode">ClientValidationMode</a></code> | <code>*string</code> | When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationTrustConfig">ClientValidationTrustConfig</a></code> | <code>*string</code> | Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers. |

---

##### `ClientValidationCa`<sup>Optional</sup> <a name="ClientValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationCa"></a>

```go
ClientValidationCa interface{}
```

- *Type:* interface{}

client_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#client_validation_ca GoogleNetworkSecurityServerTlsPolicy#client_validation_ca}

---

##### `ClientValidationMode`<sup>Optional</sup> <a name="ClientValidationMode" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationMode"></a>

```go
ClientValidationMode *string
```

- *Type:* *string

When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.

Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty. Possible values: ["CLIENT_VALIDATION_MODE_UNSPECIFIED", "ALLOW_INVALID_OR_MISSING_CLIENT_CERT", "REJECT_INVALID"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#client_validation_mode GoogleNetworkSecurityServerTlsPolicy#client_validation_mode}

---

##### `ClientValidationTrustConfig`<sup>Optional</sup> <a name="ClientValidationTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationTrustConfig"></a>

```go
ClientValidationTrustConfig *string
```

- *Type:* *string

Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#client_validation_trust_config GoogleNetworkSecurityServerTlsPolicy#client_validation_trust_config}

---

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

&googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa {
	CertificateProviderInstance: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance,
	GrpcEndpoint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `CertificateProviderInstance`<sup>Optional</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.certificateProviderInstance"></a>

```go
CertificateProviderInstance GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#certificate_provider_instance GoogleNetworkSecurityServerTlsPolicy#certificate_provider_instance}

---

##### `GrpcEndpoint`<sup>Optional</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.grpcEndpoint"></a>

```go
GrpcEndpoint GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#grpc_endpoint GoogleNetworkSecurityServerTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

&googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance {
	PluginInstance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.property.pluginInstance"></a>

```go
PluginInstance *string
```

- *Type:* *string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#plugin_instance GoogleNetworkSecurityServerTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

&googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint {
	TargetUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.property.targetUri">TargetUri</a></code> | <code>*string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.property.targetUri"></a>

```go
TargetUri *string
```

- *Type:* *string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#target_uri GoogleNetworkSecurityServerTlsPolicy#target_uri}

---

### GoogleNetworkSecurityServerTlsPolicyServerCertificate <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

&googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate {
	CertificateProviderInstance: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance,
	GrpcEndpoint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `CertificateProviderInstance`<sup>Optional</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.property.certificateProviderInstance"></a>

```go
CertificateProviderInstance GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#certificate_provider_instance GoogleNetworkSecurityServerTlsPolicy#certificate_provider_instance}

---

##### `GrpcEndpoint`<sup>Optional</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.property.grpcEndpoint"></a>

```go
GrpcEndpoint GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#grpc_endpoint GoogleNetworkSecurityServerTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

&googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance {
	PluginInstance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.property.pluginInstance"></a>

```go
PluginInstance *string
```

- *Type:* *string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#plugin_instance GoogleNetworkSecurityServerTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

&googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint {
	TargetUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.property.targetUri">TargetUri</a></code> | <code>*string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.property.targetUri"></a>

```go
TargetUri *string
```

- *Type:* *string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#target_uri GoogleNetworkSecurityServerTlsPolicy#target_uri}

---

### GoogleNetworkSecurityServerTlsPolicyTimeouts <a name="GoogleNetworkSecurityServerTlsPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

&googlenetworksecurityservertlspolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#create GoogleNetworkSecurityServerTlsPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#delete GoogleNetworkSecurityServerTlsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#update GoogleNetworkSecurityServerTlsPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#create GoogleNetworkSecurityServerTlsPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#delete GoogleNetworkSecurityServerTlsPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_server_tls_policy#update GoogleNetworkSecurityServerTlsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```go
func PluginInstanceInput() *string
```

- *Type:* *string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```go
func PluginInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---


### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUriInput">TargetUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUri">TargetUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetUriInput`<sup>Optional</sup> <a name="TargetUriInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUriInput"></a>

```go
func TargetUriInput() *string
```

- *Type:* *string

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUri"></a>

```go
func TargetUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---


### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance">PutCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint">PutGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetCertificateProviderInstance">ResetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetGrpcEndpoint">ResetGrpcEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateProviderInstance` <a name="PutCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance"></a>

```go
func PutCertificateProviderInstance(value GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---

##### `PutGrpcEndpoint` <a name="PutGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint"></a>

```go
func PutGrpcEndpoint(value GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---

##### `ResetCertificateProviderInstance` <a name="ResetCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetCertificateProviderInstance"></a>

```go
func ResetCertificateProviderInstance()
```

##### `ResetGrpcEndpoint` <a name="ResetGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetGrpcEndpoint"></a>

```go
func ResetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstanceInput">CertificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpointInput">GrpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateProviderInstance`<sup>Required</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstance"></a>

```go
func CertificateProviderInstance() GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference</a>

---

##### `GrpcEndpoint`<sup>Required</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpoint"></a>

```go
func GrpcEndpoint() GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference</a>

---

##### `CertificateProviderInstanceInput`<sup>Optional</sup> <a name="CertificateProviderInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstanceInput"></a>

```go
func CertificateProviderInstanceInput() GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---

##### `GrpcEndpointInput`<sup>Optional</sup> <a name="GrpcEndpointInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpointInput"></a>

```go
func GrpcEndpointInput() GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa">PutClientValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationCa">ResetClientValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationMode">ResetClientValidationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationTrustConfig">ResetClientValidationTrustConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientValidationCa` <a name="PutClientValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa"></a>

```go
func PutClientValidationCa(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientValidationCa` <a name="ResetClientValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationCa"></a>

```go
func ResetClientValidationCa()
```

##### `ResetClientValidationMode` <a name="ResetClientValidationMode" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationMode"></a>

```go
func ResetClientValidationMode()
```

##### `ResetClientValidationTrustConfig` <a name="ResetClientValidationTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationTrustConfig"></a>

```go
func ResetClientValidationTrustConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCa">ClientValidationCa</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCaInput">ClientValidationCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationModeInput">ClientValidationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfigInput">ClientValidationTrustConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationMode">ClientValidationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfig">ClientValidationTrustConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientValidationCa`<sup>Required</sup> <a name="ClientValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCa"></a>

```go
func ClientValidationCa() GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList</a>

---

##### `ClientValidationCaInput`<sup>Optional</sup> <a name="ClientValidationCaInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCaInput"></a>

```go
func ClientValidationCaInput() interface{}
```

- *Type:* interface{}

---

##### `ClientValidationModeInput`<sup>Optional</sup> <a name="ClientValidationModeInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationModeInput"></a>

```go
func ClientValidationModeInput() *string
```

- *Type:* *string

---

##### `ClientValidationTrustConfigInput`<sup>Optional</sup> <a name="ClientValidationTrustConfigInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfigInput"></a>

```go
func ClientValidationTrustConfigInput() *string
```

- *Type:* *string

---

##### `ClientValidationMode`<sup>Required</sup> <a name="ClientValidationMode" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationMode"></a>

```go
func ClientValidationMode() *string
```

- *Type:* *string

---

##### `ClientValidationTrustConfig`<sup>Required</sup> <a name="ClientValidationTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfig"></a>

```go
func ClientValidationTrustConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityServerTlsPolicyMtlsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a>

---


### GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```go
func PluginInstanceInput() *string
```

- *Type:* *string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```go
func PluginInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---


### GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUriInput">TargetUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUri">TargetUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetUriInput`<sup>Optional</sup> <a name="TargetUriInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUriInput"></a>

```go
func TargetUriInput() *string
```

- *Type:* *string

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUri"></a>

```go
func TargetUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---


### GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance">PutCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint">PutGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetCertificateProviderInstance">ResetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetGrpcEndpoint">ResetGrpcEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateProviderInstance` <a name="PutCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance"></a>

```go
func PutCertificateProviderInstance(value GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---

##### `PutGrpcEndpoint` <a name="PutGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint"></a>

```go
func PutGrpcEndpoint(value GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---

##### `ResetCertificateProviderInstance` <a name="ResetCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetCertificateProviderInstance"></a>

```go
func ResetCertificateProviderInstance()
```

##### `ResetGrpcEndpoint` <a name="ResetGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetGrpcEndpoint"></a>

```go
func ResetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstanceInput">CertificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpointInput">GrpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateProviderInstance`<sup>Required</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstance"></a>

```go
func CertificateProviderInstance() GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference</a>

---

##### `GrpcEndpoint`<sup>Required</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpoint"></a>

```go
func GrpcEndpoint() GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference</a>

---

##### `CertificateProviderInstanceInput`<sup>Optional</sup> <a name="CertificateProviderInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstanceInput"></a>

```go
func CertificateProviderInstanceInput() GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---

##### `GrpcEndpointInput`<sup>Optional</sup> <a name="GrpcEndpointInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpointInput"></a>

```go
func GrpcEndpointInput() GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityServerTlsPolicyServerCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a>

---


### GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityservertlspolicy"

googlenetworksecurityservertlspolicy.NewGoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



