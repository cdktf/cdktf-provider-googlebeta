# `googleDnsManagedZone` Submodule <a name="`googleDnsManagedZone` Submodule" id="@cdktf/provider-google-beta.googleDnsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsManagedZone <a name="GoogleDnsManagedZone" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone google_dns_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZone(scope Construct, id *string, config GoogleDnsManagedZoneConfig) GoogleDnsManagedZone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig">GoogleDnsManagedZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig">GoogleDnsManagedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putCloudLoggingConfig">PutCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig">PutDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putForwardingConfig">PutForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPeeringConfig">PutPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig">PutPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetCloudLoggingConfig">ResetCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDnssecConfig">ResetDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForwardingConfig">ResetForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPeeringConfig">ResetPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPrivateVisibilityConfig">ResetPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetReverseLookup">ResetReverseLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudLoggingConfig` <a name="PutCloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putCloudLoggingConfig"></a>

```go
func PutCloudLoggingConfig(value GoogleDnsManagedZoneCloudLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putCloudLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

---

##### `PutDnssecConfig` <a name="PutDnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig"></a>

```go
func PutDnssecConfig(value GoogleDnsManagedZoneDnssecConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

---

##### `PutForwardingConfig` <a name="PutForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putForwardingConfig"></a>

```go
func PutForwardingConfig(value GoogleDnsManagedZoneForwardingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putForwardingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

---

##### `PutPeeringConfig` <a name="PutPeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPeeringConfig"></a>

```go
func PutPeeringConfig(value GoogleDnsManagedZonePeeringConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

---

##### `PutPrivateVisibilityConfig` <a name="PutPrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig"></a>

```go
func PutPrivateVisibilityConfig(value GoogleDnsManagedZonePrivateVisibilityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value GoogleDnsManagedZoneServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDnsManagedZoneTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>

---

##### `ResetCloudLoggingConfig` <a name="ResetCloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetCloudLoggingConfig"></a>

```go
func ResetCloudLoggingConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDnssecConfig` <a name="ResetDnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDnssecConfig"></a>

```go
func ResetDnssecConfig()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetForwardingConfig` <a name="ResetForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForwardingConfig"></a>

```go
func ResetForwardingConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetPeeringConfig` <a name="ResetPeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPeeringConfig"></a>

```go
func ResetPeeringConfig()
```

##### `ResetPrivateVisibilityConfig` <a name="ResetPrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPrivateVisibilityConfig"></a>

```go
func ResetPrivateVisibilityConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReverseLookup` <a name="ResetReverseLookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetReverseLookup"></a>

```go
func ResetReverseLookup()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetVisibility"></a>

```go
func ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDnsManagedZone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.GoogleDnsManagedZone_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.GoogleDnsManagedZone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.GoogleDnsManagedZone_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.GoogleDnsManagedZone_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDnsManagedZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDnsManagedZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDnsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDnsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfig">CloudLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference">GoogleDnsManagedZoneCloudLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfig">DnssecConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference">GoogleDnsManagedZoneDnssecConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfig">ForwardingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference">GoogleDnsManagedZoneForwardingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.managedZoneId">ManagedZoneId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfig">PeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference">GoogleDnsManagedZonePeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfig">PrivateVisibilityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference">GoogleDnsManagedZonePrivateVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference">GoogleDnsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfigInput">CloudLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsNameInput">DnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfigInput">DnssecConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfigInput">ForwardingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfigInput">PeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfigInput">PrivateVisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookupInput">ReverseLookupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookup">ReverseLookup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudLoggingConfig`<sup>Required</sup> <a name="CloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfig"></a>

```go
func CloudLoggingConfig() GoogleDnsManagedZoneCloudLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference">GoogleDnsManagedZoneCloudLoggingConfigOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DnssecConfig`<sup>Required</sup> <a name="DnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfig"></a>

```go
func DnssecConfig() GoogleDnsManagedZoneDnssecConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference">GoogleDnsManagedZoneDnssecConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ForwardingConfig`<sup>Required</sup> <a name="ForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfig"></a>

```go
func ForwardingConfig() GoogleDnsManagedZoneForwardingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference">GoogleDnsManagedZoneForwardingConfigOutputReference</a>

---

##### `ManagedZoneId`<sup>Required</sup> <a name="ManagedZoneId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.managedZoneId"></a>

```go
func ManagedZoneId() *f64
```

- *Type:* *f64

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameServers"></a>

```go
func NameServers() *[]*string
```

- *Type:* *[]*string

---

##### `PeeringConfig`<sup>Required</sup> <a name="PeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfig"></a>

```go
func PeeringConfig() GoogleDnsManagedZonePeeringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference">GoogleDnsManagedZonePeeringConfigOutputReference</a>

---

##### `PrivateVisibilityConfig`<sup>Required</sup> <a name="PrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfig"></a>

```go
func PrivateVisibilityConfig() GoogleDnsManagedZonePrivateVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference">GoogleDnsManagedZonePrivateVisibilityConfigOutputReference</a>

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() GoogleDnsManagedZoneServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeouts"></a>

```go
func Timeouts() GoogleDnsManagedZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference">GoogleDnsManagedZoneTimeoutsOutputReference</a>

---

##### `CloudLoggingConfigInput`<sup>Optional</sup> <a name="CloudLoggingConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfigInput"></a>

```go
func CloudLoggingConfigInput() GoogleDnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsNameInput"></a>

```go
func DnsNameInput() *string
```

- *Type:* *string

---

##### `DnssecConfigInput`<sup>Optional</sup> <a name="DnssecConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfigInput"></a>

```go
func DnssecConfigInput() GoogleDnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardingConfigInput`<sup>Optional</sup> <a name="ForwardingConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfigInput"></a>

```go
func ForwardingConfigInput() GoogleDnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeeringConfigInput`<sup>Optional</sup> <a name="PeeringConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfigInput"></a>

```go
func PeeringConfigInput() GoogleDnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

---

##### `PrivateVisibilityConfigInput`<sup>Optional</sup> <a name="PrivateVisibilityConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfigInput"></a>

```go
func PrivateVisibilityConfigInput() GoogleDnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReverseLookupInput`<sup>Optional</sup> <a name="ReverseLookupInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookupInput"></a>

```go
func ReverseLookupInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() GoogleDnsManagedZoneServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReverseLookup`<sup>Required</sup> <a name="ReverseLookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookup"></a>

```go
func ReverseLookup() interface{}
```

- *Type:* interface{}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsManagedZoneCloudLoggingConfig <a name="GoogleDnsManagedZoneCloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZoneCloudLoggingConfig {
	EnableLogging: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | If set, enable query logging for this ManagedZone. False by default, making logging opt-in. |

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

If set, enable query logging for this ManagedZone. False by default, making logging opt-in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#enable_logging GoogleDnsManagedZone#enable_logging}

---

### GoogleDnsManagedZoneConfig <a name="GoogleDnsManagedZoneConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZoneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnsName: *string,
	Name: *string,
	CloudLoggingConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig,
	Description: *string,
	DnssecConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig,
	ForceDestroy: interface{},
	ForwardingConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig,
	Id: *string,
	Labels: *map[string]*string,
	PeeringConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig,
	PrivateVisibilityConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig,
	Project: *string,
	ReverseLookup: interface{},
	ServiceDirectoryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts,
	Visibility: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnsName">DnsName</a></code> | <code>*string</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.name">Name</a></code> | <code>*string</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.cloudLoggingConfig">CloudLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.description">Description</a></code> | <code>*string</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnssecConfig">DnssecConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forwardingConfig">ForwardingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#id GoogleDnsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.peeringConfig">PeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.privateVisibilityConfig">PrivateVisibilityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#project GoogleDnsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.reverseLookup">ReverseLookup</a></code> | <code>interface{}</code> | Specifies if this is a managed reverse lookup zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.visibility">Visibility</a></code> | <code>*string</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnsName"></a>

```go
DnsName *string
```

- *Type:* *string

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#dns_name GoogleDnsManagedZone#dns_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#name GoogleDnsManagedZone#name}

---

##### `CloudLoggingConfig`<sup>Optional</sup> <a name="CloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.cloudLoggingConfig"></a>

```go
CloudLoggingConfig GoogleDnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#cloud_logging_config GoogleDnsManagedZone#cloud_logging_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#description GoogleDnsManagedZone#description}

---

##### `DnssecConfig`<sup>Optional</sup> <a name="DnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnssecConfig"></a>

```go
DnssecConfig GoogleDnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#dnssec_config GoogleDnsManagedZone#dnssec_config}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#force_destroy GoogleDnsManagedZone#force_destroy}

---

##### `ForwardingConfig`<sup>Optional</sup> <a name="ForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forwardingConfig"></a>

```go
ForwardingConfig GoogleDnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#forwarding_config GoogleDnsManagedZone#forwarding_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#id GoogleDnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to this ManagedZone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#labels GoogleDnsManagedZone#labels}

---

##### `PeeringConfig`<sup>Optional</sup> <a name="PeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.peeringConfig"></a>

```go
PeeringConfig GoogleDnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#peering_config GoogleDnsManagedZone#peering_config}

---

##### `PrivateVisibilityConfig`<sup>Optional</sup> <a name="PrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.privateVisibilityConfig"></a>

```go
PrivateVisibilityConfig GoogleDnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#private_visibility_config GoogleDnsManagedZone#private_visibility_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#project GoogleDnsManagedZone#project}.

---

##### `ReverseLookup`<sup>Optional</sup> <a name="ReverseLookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.reverseLookup"></a>

```go
ReverseLookup interface{}
```

- *Type:* interface{}

Specifies if this is a managed reverse lookup zone.

If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under 'private_visibility_config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#reverse_lookup GoogleDnsManagedZone#reverse_lookup}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig GoogleDnsManagedZoneServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#service_directory_config GoogleDnsManagedZone#service_directory_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.timeouts"></a>

```go
Timeouts GoogleDnsManagedZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#timeouts GoogleDnsManagedZone#timeouts}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#visibility GoogleDnsManagedZone#visibility}

---

### GoogleDnsManagedZoneDnssecConfig <a name="GoogleDnsManagedZoneDnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZoneDnssecConfig {
	DefaultKeySpecs: interface{},
	Kind: *string,
	NonExistence: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.defaultKeySpecs">DefaultKeySpecs</a></code> | <code>interface{}</code> | default_key_specs block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.kind">Kind</a></code> | <code>*string</code> | Identifies what kind of resource this is. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.nonExistence">NonExistence</a></code> | <code>*string</code> | Specifies the mechanism used to provide authenticated denial-of-existence responses. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.state">State</a></code> | <code>*string</code> | Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]. |

---

##### `DefaultKeySpecs`<sup>Optional</sup> <a name="DefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.defaultKeySpecs"></a>

```go
DefaultKeySpecs interface{}
```

- *Type:* interface{}

default_key_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#default_key_specs GoogleDnsManagedZone#default_key_specs}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}

---

##### `NonExistence`<sup>Optional</sup> <a name="NonExistence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.nonExistence"></a>

```go
NonExistence *string
```

- *Type:* *string

Specifies the mechanism used to provide authenticated denial-of-existence responses.

non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#non_existence GoogleDnsManagedZone#non_existence}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#state GoogleDnsManagedZone#state}

---

### GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs <a name="GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs {
	Algorithm: *string,
	KeyLength: *f64,
	KeyType: *string,
	Kind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm">Algorithm</a></code> | <code>*string</code> | String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength">KeyLength</a></code> | <code>*f64</code> | Length of the keys in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType">KeyType</a></code> | <code>*string</code> | Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind">Kind</a></code> | <code>*string</code> | Identifies what kind of resource this is. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#algorithm GoogleDnsManagedZone#algorithm}

---

##### `KeyLength`<sup>Optional</sup> <a name="KeyLength" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength"></a>

```go
KeyLength *f64
```

- *Type:* *f64

Length of the keys in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#key_length GoogleDnsManagedZone#key_length}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK).

Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#key_type GoogleDnsManagedZone#key_type}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}

---

### GoogleDnsManagedZoneForwardingConfig <a name="GoogleDnsManagedZoneForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZoneForwardingConfig {
	TargetNameServers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig.property.targetNameServers">TargetNameServers</a></code> | <code>interface{}</code> | target_name_servers block. |

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig.property.targetNameServers"></a>

```go
TargetNameServers interface{}
```

- *Type:* interface{}

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#target_name_servers GoogleDnsManagedZone#target_name_servers}

---

### GoogleDnsManagedZoneForwardingConfigTargetNameServers <a name="GoogleDnsManagedZoneForwardingConfigTargetNameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZoneForwardingConfigTargetNameServers {
	Ipv4Address: *string,
	ForwardingPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | IPv4 address of a target name server. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath">ForwardingPath</a></code> | <code>*string</code> | Forwarding path for this TargetNameServer. |

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address"></a>

```go
Ipv4Address *string
```

- *Type:* *string

IPv4 address of a target name server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#ipv4_address GoogleDnsManagedZone#ipv4_address}

---

##### `ForwardingPath`<sup>Optional</sup> <a name="ForwardingPath" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath"></a>

```go
ForwardingPath *string
```

- *Type:* *string

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#forwarding_path GoogleDnsManagedZone#forwarding_path}

---

### GoogleDnsManagedZonePeeringConfig <a name="GoogleDnsManagedZonePeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZonePeeringConfig {
	TargetNetwork: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a></code> | target_network block. |

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig.property.targetNetwork"></a>

```go
TargetNetwork GoogleDnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

target_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#target_network GoogleDnsManagedZone#target_network}

---

### GoogleDnsManagedZonePeeringConfigTargetNetwork <a name="GoogleDnsManagedZonePeeringConfigTargetNetwork" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZonePeeringConfigTargetNetwork {
	NetworkUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork.property.networkUrl"></a>

```go
NetworkUrl *string
```

- *Type:* *string

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}

---

### GoogleDnsManagedZonePrivateVisibilityConfig <a name="GoogleDnsManagedZonePrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZonePrivateVisibilityConfig {
	GkeClusters: interface{},
	Networks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.gkeClusters">GkeClusters</a></code> | <code>interface{}</code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |

---

##### `GkeClusters`<sup>Optional</sup> <a name="GkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.gkeClusters"></a>

```go
GkeClusters interface{}
```

- *Type:* interface{}

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#gke_clusters GoogleDnsManagedZone#gke_clusters}

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#networks GoogleDnsManagedZone#networks}

---

### GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters <a name="GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters {
	GkeClusterName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName">GkeClusterName</a></code> | <code>*string</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName"></a>

```go
GkeClusterName *string
```

- *Type:* *string

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like
'projects/* /locations/* /clusters/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#gke_cluster_name GoogleDnsManagedZone#gke_cluster_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDnsManagedZonePrivateVisibilityConfigNetworks <a name="GoogleDnsManagedZonePrivateVisibilityConfigNetworks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks {
	NetworkUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl"></a>

```go
NetworkUrl *string
```

- *Type:* *string

The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}

---

### GoogleDnsManagedZoneServiceDirectoryConfig <a name="GoogleDnsManagedZoneServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZoneServiceDirectoryConfig {
	Namespace: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig.property.namespace">Namespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a></code> | namespace block. |

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig.property.namespace"></a>

```go
Namespace GoogleDnsManagedZoneServiceDirectoryConfigNamespace
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#namespace GoogleDnsManagedZone#namespace}

---

### GoogleDnsManagedZoneServiceDirectoryConfigNamespace <a name="GoogleDnsManagedZoneServiceDirectoryConfigNamespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace {
	NamespaceUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace.property.namespaceUrl">NamespaceUrl</a></code> | <code>*string</code> | The fully qualified or partial URL of the service directory namespace that should be associated with the zone. |

---

##### `NamespaceUrl`<sup>Required</sup> <a name="NamespaceUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace.property.namespaceUrl"></a>

```go
NamespaceUrl *string
```

- *Type:* *string

The fully qualified or partial URL of the service directory namespace that should be associated with the zone.

This should be formatted like
'https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}'
or simply 'projects/{project}/locations/{location}/namespaces/{namespace_id}'
Ignored for 'public' visibility zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#namespace_url GoogleDnsManagedZone#namespace_url}

---

### GoogleDnsManagedZoneTimeouts <a name="GoogleDnsManagedZoneTimeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

&googlednsmanagedzone.GoogleDnsManagedZoneTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#create GoogleDnsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#delete GoogleDnsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#update GoogleDnsManagedZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#create GoogleDnsManagedZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#delete GoogleDnsManagedZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#update GoogleDnsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsManagedZoneCloudLoggingConfigOutputReference <a name="GoogleDnsManagedZoneCloudLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneCloudLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsManagedZoneCloudLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

---


### GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList <a name="GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.get"></a>

```go
func Get(index *f64) GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference <a name="GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength">ResetKeyLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind">ResetKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetKeyLength` <a name="ResetKeyLength" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength"></a>

```go
func ResetKeyLength()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind"></a>

```go
func ResetKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput">KeyLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength">KeyLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `KeyLengthInput`<sup>Optional</sup> <a name="KeyLengthInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput"></a>

```go
func KeyLengthInput() *f64
```

- *Type:* *f64

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `KeyLength`<sup>Required</sup> <a name="KeyLength" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength"></a>

```go
func KeyLength() *f64
```

- *Type:* *f64

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsManagedZoneDnssecConfigOutputReference <a name="GoogleDnsManagedZoneDnssecConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneDnssecConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsManagedZoneDnssecConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs">PutDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs">ResetDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetNonExistence">ResetNonExistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultKeySpecs` <a name="PutDefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs"></a>

```go
func PutDefaultKeySpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultKeySpecs` <a name="ResetDefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs"></a>

```go
func ResetDefaultKeySpecs()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetKind"></a>

```go
func ResetKind()
```

##### `ResetNonExistence` <a name="ResetNonExistence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetNonExistence"></a>

```go
func ResetNonExistence()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs">DefaultKeySpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput">DefaultKeySpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput">NonExistenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistence">NonExistence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultKeySpecs`<sup>Required</sup> <a name="DefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs"></a>

```go
func DefaultKeySpecs() GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList</a>

---

##### `DefaultKeySpecsInput`<sup>Optional</sup> <a name="DefaultKeySpecsInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput"></a>

```go
func DefaultKeySpecsInput() interface{}
```

- *Type:* interface{}

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NonExistenceInput`<sup>Optional</sup> <a name="NonExistenceInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput"></a>

```go
func NonExistenceInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `NonExistence`<sup>Required</sup> <a name="NonExistence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistence"></a>

```go
func NonExistence() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

---


### GoogleDnsManagedZoneForwardingConfigOutputReference <a name="GoogleDnsManagedZoneForwardingConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneForwardingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsManagedZoneForwardingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.putTargetNameServers">PutTargetNameServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNameServers` <a name="PutTargetNameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.putTargetNameServers"></a>

```go
func PutTargetNameServers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServers">TargetNameServers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList">GoogleDnsManagedZoneForwardingConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput">TargetNameServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServers"></a>

```go
func TargetNameServers() GoogleDnsManagedZoneForwardingConfigTargetNameServersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList">GoogleDnsManagedZoneForwardingConfigTargetNameServersList</a>

---

##### `TargetNameServersInput`<sup>Optional</sup> <a name="TargetNameServersInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput"></a>

```go
func TargetNameServersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

---


### GoogleDnsManagedZoneForwardingConfigTargetNameServersList <a name="GoogleDnsManagedZoneForwardingConfigTargetNameServersList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneForwardingConfigTargetNameServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDnsManagedZoneForwardingConfigTargetNameServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.get"></a>

```go
func Get(index *f64) GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference <a name="GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath">ResetForwardingPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardingPath` <a name="ResetForwardingPath" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```go
func ResetForwardingPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput">ForwardingPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath">ForwardingPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardingPathInput`<sup>Optional</sup> <a name="ForwardingPathInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```go
func ForwardingPathInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```go
func Ipv4AddressInput() *string
```

- *Type:* *string

---

##### `ForwardingPath`<sup>Required</sup> <a name="ForwardingPath" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```go
func ForwardingPath() *string
```

- *Type:* *string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsManagedZonePeeringConfigOutputReference <a name="GoogleDnsManagedZonePeeringConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZonePeeringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsManagedZonePeeringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.putTargetNetwork">PutTargetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNetwork` <a name="PutTargetNetwork" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.putTargetNetwork"></a>

```go
func PutTargetNetwork(value GoogleDnsManagedZonePeeringConfigTargetNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.putTargetNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference">GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetwork"></a>

```go
func TargetNetwork() GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference">GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference</a>

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() GoogleDnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

---


### GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference <a name="GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput"></a>

```go
func NetworkUrlInput() *string
```

- *Type:* *string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl"></a>

```go
func NetworkUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

---


### GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList <a name="GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.get"></a>

```go
func Get(index *f64) GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference <a name="GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput">GkeClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName">GkeClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GkeClusterNameInput`<sup>Optional</sup> <a name="GkeClusterNameInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```go
func GkeClusterNameInput() *string
```

- *Type:* *string

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName"></a>

```go
func GkeClusterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsManagedZonePrivateVisibilityConfigNetworksList <a name="GoogleDnsManagedZonePrivateVisibilityConfigNetworksList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZonePrivateVisibilityConfigNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDnsManagedZonePrivateVisibilityConfigNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.get"></a>

```go
func Get(index *f64) GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference <a name="GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput"></a>

```go
func NetworkUrlInput() *string
```

- *Type:* *string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl"></a>

```go
func NetworkUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsManagedZonePrivateVisibilityConfigOutputReference <a name="GoogleDnsManagedZonePrivateVisibilityConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZonePrivateVisibilityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsManagedZonePrivateVisibilityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters">PutGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters">ResetGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGkeClusters` <a name="PutGkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters"></a>

```go
func PutGkeClusters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGkeClusters` <a name="ResetGkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters"></a>

```go
func ResetGkeClusters()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks"></a>

```go
func ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters">GkeClusters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList">GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList">GoogleDnsManagedZonePrivateVisibilityConfigNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput">GkeClustersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GkeClusters`<sup>Required</sup> <a name="GkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters"></a>

```go
func GkeClusters() GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList">GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networks"></a>

```go
func Networks() GoogleDnsManagedZonePrivateVisibilityConfigNetworksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList">GoogleDnsManagedZonePrivateVisibilityConfigNetworksList</a>

---

##### `GkeClustersInput`<sup>Optional</sup> <a name="GkeClustersInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput"></a>

```go
func GkeClustersInput() interface{}
```

- *Type:* interface{}

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

---


### GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference <a name="GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrlInput">NamespaceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrl">NamespaceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceUrlInput`<sup>Optional</sup> <a name="NamespaceUrlInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrlInput"></a>

```go
func NamespaceUrlInput() *string
```

- *Type:* *string

---

##### `NamespaceUrl`<sup>Required</sup> <a name="NamespaceUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrl"></a>

```go
func NamespaceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDnsManagedZoneServiceDirectoryConfigNamespace
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

---


### GoogleDnsManagedZoneServiceDirectoryConfigOutputReference <a name="GoogleDnsManagedZoneServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsManagedZoneServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.putNamespace">PutNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespace` <a name="PutNamespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.putNamespace"></a>

```go
func PutNamespace(value GoogleDnsManagedZoneServiceDirectoryConfigNamespace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.putNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespace">Namespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespace"></a>

```go
func Namespace() GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() GoogleDnsManagedZoneServiceDirectoryConfigNamespace
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDnsManagedZoneServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

---


### GoogleDnsManagedZoneTimeoutsOutputReference <a name="GoogleDnsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlednsmanagedzone"

googlednsmanagedzone.NewGoogleDnsManagedZoneTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsManagedZoneTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



