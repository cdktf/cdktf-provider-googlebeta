# `googleNetworkSecurityTlsInspectionPolicy` Submodule <a name="`googleNetworkSecurityTlsInspectionPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityTlsInspectionPolicy <a name="GoogleNetworkSecurityTlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy google_network_security_tls_inspection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritytlsinspectionpolicy"

googlenetworksecuritytlsinspectionpolicy.NewGoogleNetworkSecurityTlsInspectionPolicy(scope Construct, id *string, config GoogleNetworkSecurityTlsInspectionPolicyConfig) GoogleNetworkSecurityTlsInspectionPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig">GoogleNetworkSecurityTlsInspectionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig">GoogleNetworkSecurityTlsInspectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures">ResetCustomTlsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet">ResetExcludePublicCaSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile">ResetTlsFeatureProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTrustConfig">ResetTrustConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityTlsInspectionPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a>

---

##### `ResetCustomTlsFeatures` <a name="ResetCustomTlsFeatures" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures"></a>

```go
func ResetCustomTlsFeatures()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExcludePublicCaSet` <a name="ResetExcludePublicCaSet" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet"></a>

```go
func ResetExcludePublicCaSet()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetMinTlsVersion"></a>

```go
func ResetMinTlsVersion()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsFeatureProfile` <a name="ResetTlsFeatureProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile"></a>

```go
func ResetTlsFeatureProfile()
```

##### `ResetTrustConfig` <a name="ResetTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTrustConfig"></a>

```go
func ResetTrustConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritytlsinspectionpolicy"

googlenetworksecuritytlsinspectionpolicy.GoogleNetworkSecurityTlsInspectionPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritytlsinspectionpolicy"

googlenetworksecuritytlsinspectionpolicy.GoogleNetworkSecurityTlsInspectionPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritytlsinspectionpolicy"

googlenetworksecuritytlsinspectionpolicy.GoogleNetworkSecurityTlsInspectionPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritytlsinspectionpolicy"

googlenetworksecuritytlsinspectionpolicy.GoogleNetworkSecurityTlsInspectionPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityTlsInspectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityTlsInspectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityTlsInspectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPoolInput">CaPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput">CustomTlsFeaturesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput">ExcludePublicCaSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput">TlsFeatureProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfigInput">TrustConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPool">CaPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeatures">CustomTlsFeatures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet">ExcludePublicCaSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile">TlsFeatureProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfig">TrustConfig</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPoolInput"></a>

```go
func CaPoolInput() *string
```

- *Type:* *string

---

##### `CustomTlsFeaturesInput`<sup>Optional</sup> <a name="CustomTlsFeaturesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput"></a>

```go
func CustomTlsFeaturesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExcludePublicCaSetInput`<sup>Optional</sup> <a name="ExcludePublicCaSetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput"></a>

```go
func ExcludePublicCaSetInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput"></a>

```go
func MinTlsVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsFeatureProfileInput`<sup>Optional</sup> <a name="TlsFeatureProfileInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput"></a>

```go
func TlsFeatureProfileInput() *string
```

- *Type:* *string

---

##### `TrustConfigInput`<sup>Optional</sup> <a name="TrustConfigInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfigInput"></a>

```go
func TrustConfigInput() *string
```

- *Type:* *string

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPool"></a>

```go
func CaPool() *string
```

- *Type:* *string

---

##### `CustomTlsFeatures`<sup>Required</sup> <a name="CustomTlsFeatures" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeatures"></a>

```go
func CustomTlsFeatures() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExcludePublicCaSet`<sup>Required</sup> <a name="ExcludePublicCaSet" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet"></a>

```go
func ExcludePublicCaSet() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersion"></a>

```go
func MinTlsVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TlsFeatureProfile`<sup>Required</sup> <a name="TlsFeatureProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile"></a>

```go
func TlsFeatureProfile() *string
```

- *Type:* *string

---

##### `TrustConfig`<sup>Required</sup> <a name="TrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfig"></a>

```go
func TrustConfig() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityTlsInspectionPolicyConfig <a name="GoogleNetworkSecurityTlsInspectionPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritytlsinspectionpolicy"

&googlenetworksecuritytlsinspectionpolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CaPool: *string,
	Name: *string,
	CustomTlsFeatures: *[]*string,
	Description: *string,
	ExcludePublicCaSet: interface{},
	Id: *string,
	Location: *string,
	MinTlsVersion: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts,
	TlsFeatureProfile: *string,
	TrustConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.caPool">CaPool</a></code> | <code>*string</code> | A CA pool resource used to issue interception certificates. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Short name of the TlsInspectionPolicy resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures">CustomTlsFeatures</a></code> | <code>*[]*string</code> | List of custom TLS cipher suites selected. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet">ExcludePublicCaSet</a></code> | <code>interface{}</code> | If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#id GoogleNetworkSecurityTlsInspectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the tls inspection policy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#project GoogleNetworkSecurityTlsInspectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile">TlsFeatureProfile</a></code> | <code>*string</code> | The selected Profile. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.trustConfig">TrustConfig</a></code> | <code>*string</code> | A TrustConfig resource used when making a connection to the TLS server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.caPool"></a>

```go
CaPool *string
```

- *Type:* *string

A CA pool resource used to issue interception certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#ca_pool GoogleNetworkSecurityTlsInspectionPolicy#ca_pool}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Short name of the TlsInspectionPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#name GoogleNetworkSecurityTlsInspectionPolicy#name}

---

##### `CustomTlsFeatures`<sup>Optional</sup> <a name="CustomTlsFeatures" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures"></a>

```go
CustomTlsFeatures *[]*string
```

- *Type:* *[]*string

List of custom TLS cipher suites selected.

This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#custom_tls_features GoogleNetworkSecurityTlsInspectionPolicy#custom_tls_features}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#description GoogleNetworkSecurityTlsInspectionPolicy#description}

---

##### `ExcludePublicCaSet`<sup>Optional</sup> <a name="ExcludePublicCaSet" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet"></a>

```go
ExcludePublicCaSet interface{}
```

- *Type:* interface{}

If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig.

These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#exclude_public_ca_set GoogleNetworkSecurityTlsInspectionPolicy#exclude_public_ca_set}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#id GoogleNetworkSecurityTlsInspectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the tls inspection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#location GoogleNetworkSecurityTlsInspectionPolicy#location}

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion"></a>

```go
MinTlsVersion *string
```

- *Type:* *string

Minimum TLS version that the firewall should use when negotiating connections with both clients and servers.

If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Possible values: ["TLS_VERSION_UNSPECIFIED", "TLS_1_0", "TLS_1_1", "TLS_1_2", "TLS_1_3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#min_tls_version GoogleNetworkSecurityTlsInspectionPolicy#min_tls_version}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#project GoogleNetworkSecurityTlsInspectionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityTlsInspectionPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#timeouts GoogleNetworkSecurityTlsInspectionPolicy#timeouts}

---

##### `TlsFeatureProfile`<sup>Optional</sup> <a name="TlsFeatureProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile"></a>

```go
TlsFeatureProfile *string
```

- *Type:* *string

The selected Profile.

If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Possible values: ["PROFILE_UNSPECIFIED", "PROFILE_COMPATIBLE", "PROFILE_MODERN", "PROFILE_RESTRICTED", "PROFILE_CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#tls_feature_profile GoogleNetworkSecurityTlsInspectionPolicy#tls_feature_profile}

---

##### `TrustConfig`<sup>Optional</sup> <a name="TrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.trustConfig"></a>

```go
TrustConfig *string
```

- *Type:* *string

A TrustConfig resource used when making a connection to the TLS server.

This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Trust config and the TLS inspection policy must be in the same region. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#trust_config GoogleNetworkSecurityTlsInspectionPolicy#trust_config}

---

### GoogleNetworkSecurityTlsInspectionPolicyTimeouts <a name="GoogleNetworkSecurityTlsInspectionPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritytlsinspectionpolicy"

&googlenetworksecuritytlsinspectionpolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#create GoogleNetworkSecurityTlsInspectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#delete GoogleNetworkSecurityTlsInspectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#update GoogleNetworkSecurityTlsInspectionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#create GoogleNetworkSecurityTlsInspectionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#delete GoogleNetworkSecurityTlsInspectionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_network_security_tls_inspection_policy#update GoogleNetworkSecurityTlsInspectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworksecuritytlsinspectionpolicy"

googlenetworksecuritytlsinspectionpolicy.NewGoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



