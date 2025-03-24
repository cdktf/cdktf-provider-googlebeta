# `googleNetworkSecurityClientTlsPolicy` Submodule <a name="`googleNetworkSecurityClientTlsPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityClientTlsPolicy <a name="GoogleNetworkSecurityClientTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy google_network_security_client_tls_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.NewGoogleNetworkSecurityClientTlsPolicy(scope Construct, id *string, config GoogleNetworkSecurityClientTlsPolicyConfig) GoogleNetworkSecurityClientTlsPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig">GoogleNetworkSecurityClientTlsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig">GoogleNetworkSecurityClientTlsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate">PutClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putServerValidationCa">PutServerValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetServerValidationCa">ResetServerValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetSni">ResetSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClientCertificate` <a name="PutClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate"></a>

```go
func PutClientCertificate(value GoogleNetworkSecurityClientTlsPolicyClientCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

---

##### `PutServerValidationCa` <a name="PutServerValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putServerValidationCa"></a>

```go
func PutServerValidationCa(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putServerValidationCa.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityClientTlsPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>

---

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServerValidationCa` <a name="ResetServerValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetServerValidationCa"></a>

```go
func ResetServerValidationCa()
```

##### `ResetSni` <a name="ResetSni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetSni"></a>

```go
func ResetSni()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityClientTlsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkSecurityClientTlsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityClientTlsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityClientTlsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityClientTlsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificate">ClientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCa">ServerValidationCa</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList">GoogleNetworkSecurityClientTlsPolicyServerValidationCaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificateInput">ClientCertificateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCaInput">ServerValidationCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sniInput">SniInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sni">Sni</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificate"></a>

```go
func ClientCertificate() GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ServerValidationCa`<sup>Required</sup> <a name="ServerValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCa"></a>

```go
func ServerValidationCa() GoogleNetworkSecurityClientTlsPolicyServerValidationCaList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList">GoogleNetworkSecurityClientTlsPolicyServerValidationCaList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() GoogleNetworkSecurityClientTlsPolicyClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServerValidationCaInput`<sup>Optional</sup> <a name="ServerValidationCaInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCaInput"></a>

```go
func ServerValidationCaInput() interface{}
```

- *Type:* interface{}

---

##### `SniInput`<sup>Optional</sup> <a name="SniInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sniInput"></a>

```go
func SniInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Sni`<sup>Required</sup> <a name="Sni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sni"></a>

```go
func Sni() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityClientTlsPolicyClientCertificate <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

&googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate {
	CertificateProviderInstance: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance,
	GrpcEndpoint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `CertificateProviderInstance`<sup>Optional</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.certificateProviderInstance"></a>

```go
CertificateProviderInstance GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#certificate_provider_instance GoogleNetworkSecurityClientTlsPolicy#certificate_provider_instance}

---

##### `GrpcEndpoint`<sup>Optional</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.grpcEndpoint"></a>

```go
GrpcEndpoint GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#grpc_endpoint GoogleNetworkSecurityClientTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

&googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance {
	PluginInstance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.property.pluginInstance"></a>

```go
PluginInstance *string
```

- *Type:* *string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#plugin_instance GoogleNetworkSecurityClientTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

&googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint {
	TargetUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.property.targetUri">TargetUri</a></code> | <code>*string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.property.targetUri"></a>

```go
TargetUri *string
```

- *Type:* *string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#target_uri GoogleNetworkSecurityClientTlsPolicy#target_uri}

---

### GoogleNetworkSecurityClientTlsPolicyConfig <a name="GoogleNetworkSecurityClientTlsPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

&googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ClientCertificate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	ServerValidationCa: interface{},
	Sni: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.clientCertificate">ClientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the client tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.serverValidationCa">ServerValidationCa</a></code> | <code>interface{}</code> | server_validation_ca block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.sni">Sni</a></code> | <code>*string</code> | Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the ClientTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#name GoogleNetworkSecurityClientTlsPolicy#name}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.clientCertificate"></a>

```go
ClientCertificate GoogleNetworkSecurityClientTlsPolicyClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#client_certificate GoogleNetworkSecurityClientTlsPolicy#client_certificate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#description GoogleNetworkSecurityClientTlsPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the ClientTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#labels GoogleNetworkSecurityClientTlsPolicy#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the client tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#location GoogleNetworkSecurityClientTlsPolicy#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}.

---

##### `ServerValidationCa`<sup>Optional</sup> <a name="ServerValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.serverValidationCa"></a>

```go
ServerValidationCa interface{}
```

- *Type:* interface{}

server_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#server_validation_ca GoogleNetworkSecurityClientTlsPolicy#server_validation_ca}

---

##### `Sni`<sup>Optional</sup> <a name="Sni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.sni"></a>

```go
Sni *string
```

- *Type:* *string

Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#sni GoogleNetworkSecurityClientTlsPolicy#sni}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityClientTlsPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#timeouts GoogleNetworkSecurityClientTlsPolicy#timeouts}

---

### GoogleNetworkSecurityClientTlsPolicyServerValidationCa <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

&googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa {
	CertificateProviderInstance: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance,
	GrpcEndpoint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `CertificateProviderInstance`<sup>Optional</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.certificateProviderInstance"></a>

```go
CertificateProviderInstance GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#certificate_provider_instance GoogleNetworkSecurityClientTlsPolicy#certificate_provider_instance}

---

##### `GrpcEndpoint`<sup>Optional</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.grpcEndpoint"></a>

```go
GrpcEndpoint GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#grpc_endpoint GoogleNetworkSecurityClientTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

&googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance {
	PluginInstance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.property.pluginInstance"></a>

```go
PluginInstance *string
```

- *Type:* *string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#plugin_instance GoogleNetworkSecurityClientTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

&googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint {
	TargetUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.property.targetUri">TargetUri</a></code> | <code>*string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.property.targetUri"></a>

```go
TargetUri *string
```

- *Type:* *string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#target_uri GoogleNetworkSecurityClientTlsPolicy#target_uri}

---

### GoogleNetworkSecurityClientTlsPolicyTimeouts <a name="GoogleNetworkSecurityClientTlsPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

&googlenetworksecurityclienttlspolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#create GoogleNetworkSecurityClientTlsPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#delete GoogleNetworkSecurityClientTlsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#update GoogleNetworkSecurityClientTlsPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#create GoogleNetworkSecurityClientTlsPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#delete GoogleNetworkSecurityClientTlsPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_network_security_client_tls_policy#update GoogleNetworkSecurityClientTlsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.NewGoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```go
func PluginInstanceInput() *string
```

- *Type:* *string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```go
func PluginInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---


### GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.NewGoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUriInput">TargetUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUri">TargetUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetUriInput`<sup>Optional</sup> <a name="TargetUriInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUriInput"></a>

```go
func TargetUriInput() *string
```

- *Type:* *string

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUri"></a>

```go
func TargetUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---


### GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.NewGoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance">PutCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint">PutGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetCertificateProviderInstance">ResetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetGrpcEndpoint">ResetGrpcEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateProviderInstance` <a name="PutCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance"></a>

```go
func PutCertificateProviderInstance(value GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---

##### `PutGrpcEndpoint` <a name="PutGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint"></a>

```go
func PutGrpcEndpoint(value GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---

##### `ResetCertificateProviderInstance` <a name="ResetCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetCertificateProviderInstance"></a>

```go
func ResetCertificateProviderInstance()
```

##### `ResetGrpcEndpoint` <a name="ResetGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetGrpcEndpoint"></a>

```go
func ResetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstanceInput">CertificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpointInput">GrpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateProviderInstance`<sup>Required</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstance"></a>

```go
func CertificateProviderInstance() GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference</a>

---

##### `GrpcEndpoint`<sup>Required</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpoint"></a>

```go
func GrpcEndpoint() GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference</a>

---

##### `CertificateProviderInstanceInput`<sup>Optional</sup> <a name="CertificateProviderInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstanceInput"></a>

```go
func CertificateProviderInstanceInput() GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---

##### `GrpcEndpointInput`<sup>Optional</sup> <a name="GrpcEndpointInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpointInput"></a>

```go
func GrpcEndpointInput() GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityClientTlsPolicyClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.NewGoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```go
func PluginInstanceInput() *string
```

- *Type:* *string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```go
func PluginInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.NewGoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUriInput">TargetUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUri">TargetUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetUriInput`<sup>Optional</sup> <a name="TargetUriInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUriInput"></a>

```go
func TargetUriInput() *string
```

- *Type:* *string

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUri"></a>

```go
func TargetUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaList <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaList" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.NewGoogleNetworkSecurityClientTlsPolicyServerValidationCaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityClientTlsPolicyServerValidationCaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.NewGoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance">PutCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint">PutGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetCertificateProviderInstance">ResetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetGrpcEndpoint">ResetGrpcEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateProviderInstance` <a name="PutCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance"></a>

```go
func PutCertificateProviderInstance(value GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---

##### `PutGrpcEndpoint` <a name="PutGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint"></a>

```go
func PutGrpcEndpoint(value GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---

##### `ResetCertificateProviderInstance` <a name="ResetCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetCertificateProviderInstance"></a>

```go
func ResetCertificateProviderInstance()
```

##### `ResetGrpcEndpoint` <a name="ResetGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetGrpcEndpoint"></a>

```go
func ResetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstance">CertificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpoint">GrpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstanceInput">CertificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpointInput">GrpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateProviderInstance`<sup>Required</sup> <a name="CertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstance"></a>

```go
func CertificateProviderInstance() GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference</a>

---

##### `GrpcEndpoint`<sup>Required</sup> <a name="GrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpoint"></a>

```go
func GrpcEndpoint() GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference</a>

---

##### `CertificateProviderInstanceInput`<sup>Optional</sup> <a name="CertificateProviderInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstanceInput"></a>

```go
func CertificateProviderInstanceInput() GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---

##### `GrpcEndpointInput`<sup>Optional</sup> <a name="GrpcEndpointInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpointInput"></a>

```go
func GrpcEndpointInput() GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworksecurityclienttlspolicy"

googlenetworksecurityclienttlspolicy.NewGoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



