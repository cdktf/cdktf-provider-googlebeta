# `googleComputeInstanceFromTemplate` Submodule <a name="`googleComputeInstanceFromTemplate` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceFromTemplate <a name="GoogleComputeInstanceFromTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template google_compute_instance_from_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplate(scope Construct, id *string, config GoogleComputeInstanceFromTemplateConfig) GoogleComputeInstanceFromTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig">GoogleComputeInstanceFromTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig">GoogleComputeInstanceFromTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putAdvancedMachineFeatures">PutAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putAttachedDisk">PutAttachedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putBootDisk">PutBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putConfidentialInstanceConfig">PutConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putGuestAccelerator">PutGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putNetworkPerformanceConfig">PutNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putScratchDisk">PutScratchDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetAdvancedMachineFeatures">ResetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetAllowStoppingForUpdate">ResetAllowStoppingForUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetAttachedDisk">ResetAttachedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetBootDisk">ResetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetCanIpForward">ResetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetConfidentialInstanceConfig">ResetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetDesiredStatus">ResetDesiredStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetEnableDisplay">ResetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetGuestAccelerator">ResetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetKeyRevocationActionType">ResetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetMetadataStartupScript">ResetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetNetworkPerformanceConfig">ResetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetPartnerMetadata">ResetPartnerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetScratchDisk">ResetScratchDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedMachineFeatures` <a name="PutAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putAdvancedMachineFeatures"></a>

```go
func PutAdvancedMachineFeatures(value GoogleComputeInstanceFromTemplateAdvancedMachineFeatures)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures">GoogleComputeInstanceFromTemplateAdvancedMachineFeatures</a>

---

##### `PutAttachedDisk` <a name="PutAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putAttachedDisk"></a>

```go
func PutAttachedDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putAttachedDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBootDisk` <a name="PutBootDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putBootDisk"></a>

```go
func PutBootDisk(value GoogleComputeInstanceFromTemplateBootDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk">GoogleComputeInstanceFromTemplateBootDisk</a>

---

##### `PutConfidentialInstanceConfig` <a name="PutConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putConfidentialInstanceConfig"></a>

```go
func PutConfidentialInstanceConfig(value GoogleComputeInstanceFromTemplateConfidentialInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig">GoogleComputeInstanceFromTemplateConfidentialInstanceConfig</a>

---

##### `PutGuestAccelerator` <a name="PutGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putGuestAccelerator"></a>

```go
func PutGuestAccelerator(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkPerformanceConfig` <a name="PutNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putNetworkPerformanceConfig"></a>

```go
func PutNetworkPerformanceConfig(value GoogleComputeInstanceFromTemplateNetworkPerformanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig">GoogleComputeInstanceFromTemplateNetworkPerformanceConfig</a>

---

##### `PutParams` <a name="PutParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putParams"></a>

```go
func PutParams(value GoogleComputeInstanceFromTemplateParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams">GoogleComputeInstanceFromTemplateParams</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putReservationAffinity"></a>

```go
func PutReservationAffinity(value GoogleComputeInstanceFromTemplateReservationAffinity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity">GoogleComputeInstanceFromTemplateReservationAffinity</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putScheduling"></a>

```go
func PutScheduling(value GoogleComputeInstanceFromTemplateScheduling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling">GoogleComputeInstanceFromTemplateScheduling</a>

---

##### `PutScratchDisk` <a name="PutScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putScratchDisk"></a>

```go
func PutScratchDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putScratchDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putServiceAccount"></a>

```go
func PutServiceAccount(value GoogleComputeInstanceFromTemplateServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount">GoogleComputeInstanceFromTemplateServiceAccount</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putShieldedInstanceConfig"></a>

```go
func PutShieldedInstanceConfig(value GoogleComputeInstanceFromTemplateShieldedInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig">GoogleComputeInstanceFromTemplateShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeInstanceFromTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts">GoogleComputeInstanceFromTemplateTimeouts</a>

---

##### `ResetAdvancedMachineFeatures` <a name="ResetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetAdvancedMachineFeatures"></a>

```go
func ResetAdvancedMachineFeatures()
```

##### `ResetAllowStoppingForUpdate` <a name="ResetAllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetAllowStoppingForUpdate"></a>

```go
func ResetAllowStoppingForUpdate()
```

##### `ResetAttachedDisk` <a name="ResetAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetAttachedDisk"></a>

```go
func ResetAttachedDisk()
```

##### `ResetBootDisk` <a name="ResetBootDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetBootDisk"></a>

```go
func ResetBootDisk()
```

##### `ResetCanIpForward` <a name="ResetCanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetCanIpForward"></a>

```go
func ResetCanIpForward()
```

##### `ResetConfidentialInstanceConfig` <a name="ResetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetConfidentialInstanceConfig"></a>

```go
func ResetConfidentialInstanceConfig()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDesiredStatus` <a name="ResetDesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetDesiredStatus"></a>

```go
func ResetDesiredStatus()
```

##### `ResetEnableDisplay` <a name="ResetEnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetEnableDisplay"></a>

```go
func ResetEnableDisplay()
```

##### `ResetGuestAccelerator` <a name="ResetGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetGuestAccelerator"></a>

```go
func ResetGuestAccelerator()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyRevocationActionType` <a name="ResetKeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetKeyRevocationActionType"></a>

```go
func ResetKeyRevocationActionType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMetadataStartupScript` <a name="ResetMetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetMetadataStartupScript"></a>

```go
func ResetMetadataStartupScript()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetMinCpuPlatform"></a>

```go
func ResetMinCpuPlatform()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetNetworkPerformanceConfig` <a name="ResetNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetNetworkPerformanceConfig"></a>

```go
func ResetNetworkPerformanceConfig()
```

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetParams"></a>

```go
func ResetParams()
```

##### `ResetPartnerMetadata` <a name="ResetPartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetPartnerMetadata"></a>

```go
func ResetPartnerMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetReservationAffinity"></a>

```go
func ResetReservationAffinity()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetResourcePolicies"></a>

```go
func ResetResourcePolicies()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetScheduling"></a>

```go
func ResetScheduling()
```

##### `ResetScratchDisk` <a name="ResetScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetScratchDisk"></a>

```go
func ResetScratchDisk()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetShieldedInstanceConfig"></a>

```go
func ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceFromTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeInstanceFromTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeInstanceFromTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeInstanceFromTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceFromTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.attachedDisk">AttachedDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList">GoogleComputeInstanceFromTemplateAttachedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference">GoogleComputeInstanceFromTemplateBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference">GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.cpuPlatform">CpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.currentStatus">CurrentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.guestAccelerator">GuestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList">GoogleComputeInstanceFromTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadataFingerprint">MetadataFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList">GoogleComputeInstanceFromTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference">GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference">GoogleComputeInstanceFromTemplateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference">GoogleComputeInstanceFromTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference">GoogleComputeInstanceFromTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.scratchDisk">ScratchDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList">GoogleComputeInstanceFromTemplateScratchDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference">GoogleComputeInstanceFromTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference">GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.tagsFingerprint">TagsFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference">GoogleComputeInstanceFromTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.advancedMachineFeaturesInput">AdvancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures">GoogleComputeInstanceFromTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.allowStoppingForUpdateInput">AllowStoppingForUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.attachedDiskInput">AttachedDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.bootDiskInput">BootDiskInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk">GoogleComputeInstanceFromTemplateBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.canIpForwardInput">CanIpForwardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.confidentialInstanceConfigInput">ConfidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig">GoogleComputeInstanceFromTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.desiredStatusInput">DesiredStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.enableDisplayInput">EnableDisplayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.guestAcceleratorInput">GuestAcceleratorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.keyRevocationActionTypeInput">KeyRevocationActionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadataStartupScriptInput">MetadataStartupScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.networkPerformanceConfigInput">NetworkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig">GoogleComputeInstanceFromTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams">GoogleComputeInstanceFromTemplateParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.partnerMetadataInput">PartnerMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity">GoogleComputeInstanceFromTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling">GoogleComputeInstanceFromTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.scratchDiskInput">ScratchDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount">GoogleComputeInstanceFromTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig">GoogleComputeInstanceFromTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.sourceInstanceTemplateInput">SourceInstanceTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.allowStoppingForUpdate">AllowStoppingForUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.desiredStatus">DesiredStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.enableDisplay">EnableDisplay</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.partnerMetadata">PartnerMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.advancedMachineFeatures"></a>

```go
func AdvancedMachineFeatures() GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `AttachedDisk`<sup>Required</sup> <a name="AttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.attachedDisk"></a>

```go
func AttachedDisk() GoogleComputeInstanceFromTemplateAttachedDiskList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList">GoogleComputeInstanceFromTemplateAttachedDiskList</a>

---

##### `BootDisk`<sup>Required</sup> <a name="BootDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.bootDisk"></a>

```go
func BootDisk() GoogleComputeInstanceFromTemplateBootDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference">GoogleComputeInstanceFromTemplateBootDiskOutputReference</a>

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.confidentialInstanceConfig"></a>

```go
func ConfidentialInstanceConfig() GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference">GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `CpuPlatform`<sup>Required</sup> <a name="CpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.cpuPlatform"></a>

```go
func CpuPlatform() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `CurrentStatus`<sup>Required</sup> <a name="CurrentStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.currentStatus"></a>

```go
func CurrentStatus() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GuestAccelerator`<sup>Required</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.guestAccelerator"></a>

```go
func GuestAccelerator() GoogleComputeInstanceFromTemplateGuestAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList">GoogleComputeInstanceFromTemplateGuestAcceleratorList</a>

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `MetadataFingerprint`<sup>Required</sup> <a name="MetadataFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadataFingerprint"></a>

```go
func MetadataFingerprint() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.networkInterface"></a>

```go
func NetworkInterface() GoogleComputeInstanceFromTemplateNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList">GoogleComputeInstanceFromTemplateNetworkInterfaceList</a>

---

##### `NetworkPerformanceConfig`<sup>Required</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.networkPerformanceConfig"></a>

```go
func NetworkPerformanceConfig() GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference">GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.params"></a>

```go
func Params() GoogleComputeInstanceFromTemplateParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference">GoogleComputeInstanceFromTemplateParamsOutputReference</a>

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.reservationAffinity"></a>

```go
func ReservationAffinity() GoogleComputeInstanceFromTemplateReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference">GoogleComputeInstanceFromTemplateReservationAffinityOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.scheduling"></a>

```go
func Scheduling() GoogleComputeInstanceFromTemplateSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference">GoogleComputeInstanceFromTemplateSchedulingOutputReference</a>

---

##### `ScratchDisk`<sup>Required</sup> <a name="ScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.scratchDisk"></a>

```go
func ScratchDisk() GoogleComputeInstanceFromTemplateScratchDiskList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList">GoogleComputeInstanceFromTemplateScratchDiskList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.serviceAccount"></a>

```go
func ServiceAccount() GoogleComputeInstanceFromTemplateServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference">GoogleComputeInstanceFromTemplateServiceAccountOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.shieldedInstanceConfig"></a>

```go
func ShieldedInstanceConfig() GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference">GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference</a>

---

##### `TagsFingerprint`<sup>Required</sup> <a name="TagsFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.tagsFingerprint"></a>

```go
func TagsFingerprint() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.timeouts"></a>

```go
func Timeouts() GoogleComputeInstanceFromTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference">GoogleComputeInstanceFromTemplateTimeoutsOutputReference</a>

---

##### `AdvancedMachineFeaturesInput`<sup>Optional</sup> <a name="AdvancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.advancedMachineFeaturesInput"></a>

```go
func AdvancedMachineFeaturesInput() GoogleComputeInstanceFromTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures">GoogleComputeInstanceFromTemplateAdvancedMachineFeatures</a>

---

##### `AllowStoppingForUpdateInput`<sup>Optional</sup> <a name="AllowStoppingForUpdateInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.allowStoppingForUpdateInput"></a>

```go
func AllowStoppingForUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `AttachedDiskInput`<sup>Optional</sup> <a name="AttachedDiskInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.attachedDiskInput"></a>

```go
func AttachedDiskInput() interface{}
```

- *Type:* interface{}

---

##### `BootDiskInput`<sup>Optional</sup> <a name="BootDiskInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.bootDiskInput"></a>

```go
func BootDiskInput() GoogleComputeInstanceFromTemplateBootDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk">GoogleComputeInstanceFromTemplateBootDisk</a>

---

##### `CanIpForwardInput`<sup>Optional</sup> <a name="CanIpForwardInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.canIpForwardInput"></a>

```go
func CanIpForwardInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialInstanceConfigInput`<sup>Optional</sup> <a name="ConfidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.confidentialInstanceConfigInput"></a>

```go
func ConfidentialInstanceConfigInput() GoogleComputeInstanceFromTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig">GoogleComputeInstanceFromTemplateConfidentialInstanceConfig</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DesiredStatusInput`<sup>Optional</sup> <a name="DesiredStatusInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.desiredStatusInput"></a>

```go
func DesiredStatusInput() *string
```

- *Type:* *string

---

##### `EnableDisplayInput`<sup>Optional</sup> <a name="EnableDisplayInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.enableDisplayInput"></a>

```go
func EnableDisplayInput() interface{}
```

- *Type:* interface{}

---

##### `GuestAcceleratorInput`<sup>Optional</sup> <a name="GuestAcceleratorInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.guestAcceleratorInput"></a>

```go
func GuestAcceleratorInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyRevocationActionTypeInput`<sup>Optional</sup> <a name="KeyRevocationActionTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.keyRevocationActionTypeInput"></a>

```go
func KeyRevocationActionTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataStartupScriptInput`<sup>Optional</sup> <a name="MetadataStartupScriptInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadataStartupScriptInput"></a>

```go
func MetadataStartupScriptInput() *string
```

- *Type:* *string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.minCpuPlatformInput"></a>

```go
func MinCpuPlatformInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkPerformanceConfigInput`<sup>Optional</sup> <a name="NetworkPerformanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.networkPerformanceConfigInput"></a>

```go
func NetworkPerformanceConfigInput() GoogleComputeInstanceFromTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig">GoogleComputeInstanceFromTemplateNetworkPerformanceConfig</a>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.paramsInput"></a>

```go
func ParamsInput() GoogleComputeInstanceFromTemplateParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams">GoogleComputeInstanceFromTemplateParams</a>

---

##### `PartnerMetadataInput`<sup>Optional</sup> <a name="PartnerMetadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.partnerMetadataInput"></a>

```go
func PartnerMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.reservationAffinityInput"></a>

```go
func ReservationAffinityInput() GoogleComputeInstanceFromTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity">GoogleComputeInstanceFromTemplateReservationAffinity</a>

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.resourcePoliciesInput"></a>

```go
func ResourcePoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.schedulingInput"></a>

```go
func SchedulingInput() GoogleComputeInstanceFromTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling">GoogleComputeInstanceFromTemplateScheduling</a>

---

##### `ScratchDiskInput`<sup>Optional</sup> <a name="ScratchDiskInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.scratchDiskInput"></a>

```go
func ScratchDiskInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() GoogleComputeInstanceFromTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount">GoogleComputeInstanceFromTemplateServiceAccount</a>

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.shieldedInstanceConfigInput"></a>

```go
func ShieldedInstanceConfigInput() GoogleComputeInstanceFromTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig">GoogleComputeInstanceFromTemplateShieldedInstanceConfig</a>

---

##### `SourceInstanceTemplateInput`<sup>Optional</sup> <a name="SourceInstanceTemplateInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.sourceInstanceTemplateInput"></a>

```go
func SourceInstanceTemplateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AllowStoppingForUpdate`<sup>Required</sup> <a name="AllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.allowStoppingForUpdate"></a>

```go
func AllowStoppingForUpdate() interface{}
```

- *Type:* interface{}

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.canIpForward"></a>

```go
func CanIpForward() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DesiredStatus`<sup>Required</sup> <a name="DesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.desiredStatus"></a>

```go
func DesiredStatus() *string
```

- *Type:* *string

---

##### `EnableDisplay`<sup>Required</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.enableDisplay"></a>

```go
func EnableDisplay() interface{}
```

- *Type:* interface{}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyRevocationActionType`<sup>Required</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.keyRevocationActionType"></a>

```go
func KeyRevocationActionType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataStartupScript`<sup>Required</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.metadataStartupScript"></a>

```go
func MetadataStartupScript() *string
```

- *Type:* *string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.minCpuPlatform"></a>

```go
func MinCpuPlatform() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartnerMetadata`<sup>Required</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.partnerMetadata"></a>

```go
func PartnerMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.resourcePolicies"></a>

```go
func ResourcePolicies() *[]*string
```

- *Type:* *[]*string

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.sourceInstanceTemplate"></a>

```go
func SourceInstanceTemplate() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceFromTemplateAdvancedMachineFeatures <a name="GoogleComputeInstanceFromTemplateAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures {
	EnableNestedVirtualization: interface{},
	EnableUefiNetworking: interface{},
	PerformanceMonitoringUnit: *string,
	ThreadsPerCore: *f64,
	TurboMode: *string,
	VisibleCoreCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>interface{}</code> | Whether to enable UEFI networking for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>*string</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.turboMode">TurboMode</a></code> | <code>*string</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>*f64</code> | The number of physical cores to expose to an instance. |

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```go
EnableNestedVirtualization interface{}
```

- *Type:* interface{}

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#enable_nested_virtualization GoogleComputeInstanceFromTemplate#enable_nested_virtualization}

---

##### `EnableUefiNetworking`<sup>Optional</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```go
EnableUefiNetworking interface{}
```

- *Type:* interface{}

Whether to enable UEFI networking for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#enable_uefi_networking GoogleComputeInstanceFromTemplate#enable_uefi_networking}

---

##### `PerformanceMonitoringUnit`<sup>Optional</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```go
PerformanceMonitoringUnit *string
```

- *Type:* *string

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#performance_monitoring_unit GoogleComputeInstanceFromTemplate#performance_monitoring_unit}

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```go
ThreadsPerCore *f64
```

- *Type:* *f64

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#threads_per_core GoogleComputeInstanceFromTemplate#threads_per_core}

---

##### `TurboMode`<sup>Optional</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.turboMode"></a>

```go
TurboMode *string
```

- *Type:* *string

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#turbo_mode GoogleComputeInstanceFromTemplate#turbo_mode}

---

##### `VisibleCoreCount`<sup>Optional</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```go
VisibleCoreCount *f64
```

- *Type:* *f64

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#visible_core_count GoogleComputeInstanceFromTemplate#visible_core_count}

---

### GoogleComputeInstanceFromTemplateAttachedDisk <a name="GoogleComputeInstanceFromTemplateAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateAttachedDisk {
	Source: *string,
	DeviceName: *string,
	DiskEncryptionKeyRaw: *string,
	KmsKeySelfLink: *string,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.source">Source</a></code> | <code>*string</code> | The name or self_link of the disk attached to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.deviceName">DeviceName</a></code> | <code>*string</code> | Name with which the attached disk is accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>*string</code> | A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.mode">Mode</a></code> | <code>*string</code> | Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.source"></a>

```go
Source *string
```

- *Type:* *string

The name or self_link of the disk attached to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#source GoogleComputeInstanceFromTemplate#source}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Name with which the attached disk is accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#device_name GoogleComputeInstanceFromTemplate#device_name}

---

##### `DiskEncryptionKeyRaw`<sup>Optional</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.diskEncryptionKeyRaw"></a>

```go
DiskEncryptionKeyRaw *string
```

- *Type:* *string

A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#disk_encryption_key_raw GoogleComputeInstanceFromTemplate#disk_encryption_key_raw}

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#kms_key_self_link GoogleComputeInstanceFromTemplate#kms_key_self_link}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDisk.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#mode GoogleComputeInstanceFromTemplate#mode}

---

### GoogleComputeInstanceFromTemplateBootDisk <a name="GoogleComputeInstanceFromTemplateBootDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateBootDisk {
	AutoDelete: interface{},
	DeviceName: *string,
	DiskEncryptionKeyRaw: *string,
	InitializeParams: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams,
	Interface: *string,
	KmsKeySelfLink: *string,
	Mode: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.autoDelete">AutoDelete</a></code> | <code>interface{}</code> | Whether the disk will be auto-deleted when the instance is deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.deviceName">DeviceName</a></code> | <code>*string</code> | Name with which attached disk will be accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>*string</code> | A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams">GoogleComputeInstanceFromTemplateBootDiskInitializeParams</a></code> | initialize_params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.interface">Interface</a></code> | <code>*string</code> | The disk interface used for attaching this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.mode">Mode</a></code> | <code>*string</code> | Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.source">Source</a></code> | <code>*string</code> | The name or self_link of the disk attached to this instance. |

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.autoDelete"></a>

```go
AutoDelete interface{}
```

- *Type:* interface{}

Whether the disk will be auto-deleted when the instance is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#auto_delete GoogleComputeInstanceFromTemplate#auto_delete}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Name with which attached disk will be accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#device_name GoogleComputeInstanceFromTemplate#device_name}

---

##### `DiskEncryptionKeyRaw`<sup>Optional</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.diskEncryptionKeyRaw"></a>

```go
DiskEncryptionKeyRaw *string
```

- *Type:* *string

A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#disk_encryption_key_raw GoogleComputeInstanceFromTemplate#disk_encryption_key_raw}

---

##### `InitializeParams`<sup>Optional</sup> <a name="InitializeParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.initializeParams"></a>

```go
InitializeParams GoogleComputeInstanceFromTemplateBootDiskInitializeParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams">GoogleComputeInstanceFromTemplateBootDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#initialize_params GoogleComputeInstanceFromTemplate#initialize_params}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.interface"></a>

```go
Interface *string
```

- *Type:* *string

The disk interface used for attaching this disk.

One of SCSI or NVME. (This field is shared with attached_disk and only used for specific cases, please don't specify this field without advice from Google.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#interface GoogleComputeInstanceFromTemplate#interface}

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#kms_key_self_link GoogleComputeInstanceFromTemplate#kms_key_self_link}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#mode GoogleComputeInstanceFromTemplate#mode}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk.property.source"></a>

```go
Source *string
```

- *Type:* *string

The name or self_link of the disk attached to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#source GoogleComputeInstanceFromTemplate#source}

---

### GoogleComputeInstanceFromTemplateBootDiskInitializeParams <a name="GoogleComputeInstanceFromTemplateBootDiskInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams {
	EnableConfidentialCompute: interface{},
	Image: *string,
	Labels: *map[string]*string,
	ProvisionedIops: *f64,
	ProvisionedThroughput: *f64,
	ResourceManagerTags: *map[string]*string,
	ResourcePolicies: *[]*string,
	Size: *f64,
	StoragePool: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | A flag to enable confidential compute mode on boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.image">Image</a></code> | <code>*string</code> | The image from which this disk was initialised. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs assigned to the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.provisionedIops">ProvisionedIops</a></code> | <code>*f64</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>*f64</code> | Indicates how much throughput to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | A list of self_links of resource policies to attach to the instance's boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.size">Size</a></code> | <code>*f64</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.storagePool">StoragePool</a></code> | <code>*string</code> | The URL of the storage pool in which the new disk is created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.type">Type</a></code> | <code>*string</code> | The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced. |

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.enableConfidentialCompute"></a>

```go
EnableConfidentialCompute interface{}
```

- *Type:* interface{}

A flag to enable confidential compute mode on boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#enable_confidential_compute GoogleComputeInstanceFromTemplate#enable_confidential_compute}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.image"></a>

```go
Image *string
```

- *Type:* *string

The image from which this disk was initialised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#image GoogleComputeInstanceFromTemplate#image}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs assigned to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#labels GoogleComputeInstanceFromTemplate#labels}

---

##### `ProvisionedIops`<sup>Optional</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.provisionedIops"></a>

```go
ProvisionedIops *f64
```

- *Type:* *f64

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#provisioned_iops GoogleComputeInstanceFromTemplate#provisioned_iops}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.provisionedThroughput"></a>

```go
ProvisionedThroughput *f64
```

- *Type:* *f64

Indicates how much throughput to provision for the disk.

This sets the number of throughput mb per second that the disk can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#provisioned_throughput GoogleComputeInstanceFromTemplate#provisioned_throughput}

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#resource_manager_tags GoogleComputeInstanceFromTemplate#resource_manager_tags}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.resourcePolicies"></a>

```go
ResourcePolicies *[]*string
```

- *Type:* *[]*string

A list of self_links of resource policies to attach to the instance's boot disk.

Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#resource_policies GoogleComputeInstanceFromTemplate#resource_policies}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The size of the image in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#size GoogleComputeInstanceFromTemplate#size}

---

##### `StoragePool`<sup>Optional</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.storagePool"></a>

```go
StoragePool *string
```

- *Type:* *string

The URL of the storage pool in which the new disk is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#storage_pool GoogleComputeInstanceFromTemplate#storage_pool}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams.property.type"></a>

```go
Type *string
```

- *Type:* *string

The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#type GoogleComputeInstanceFromTemplate#type}

---

### GoogleComputeInstanceFromTemplateConfidentialInstanceConfig <a name="GoogleComputeInstanceFromTemplateConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig {
	ConfidentialInstanceType: *string,
	EnableConfidentialCompute: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>*string</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `ConfidentialInstanceType`<sup>Optional</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```go
ConfidentialInstanceType *string
```

- *Type:* *string

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#confidential_instance_type GoogleComputeInstanceFromTemplate#confidential_instance_type}

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```go
EnableConfidentialCompute interface{}
```

- *Type:* interface{}

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#enable_confidential_compute GoogleComputeInstanceFromTemplate#enable_confidential_compute}

---

### GoogleComputeInstanceFromTemplateConfig <a name="GoogleComputeInstanceFromTemplateConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SourceInstanceTemplate: *string,
	AdvancedMachineFeatures: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures,
	AllowStoppingForUpdate: interface{},
	AttachedDisk: interface{},
	BootDisk: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk,
	CanIpForward: interface{},
	ConfidentialInstanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig,
	DeletionProtection: interface{},
	Description: *string,
	DesiredStatus: *string,
	EnableDisplay: interface{},
	GuestAccelerator: interface{},
	Hostname: *string,
	Id: *string,
	KeyRevocationActionType: *string,
	Labels: *map[string]*string,
	MachineType: *string,
	Metadata: *map[string]*string,
	MetadataStartupScript: *string,
	MinCpuPlatform: *string,
	NetworkInterface: interface{},
	NetworkPerformanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig,
	Params: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams,
	PartnerMetadata: *map[string]*string,
	Project: *string,
	ReservationAffinity: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity,
	ResourcePolicies: *[]*string,
	Scheduling: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling,
	ScratchDisk: interface{},
	ServiceAccount: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount,
	ShieldedInstanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>*string</code> | Name or self link of an instance template to create the instance based on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures">GoogleComputeInstanceFromTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.allowStoppingForUpdate">AllowStoppingForUpdate</a></code> | <code>interface{}</code> | If true, allows Terraform to stop the instance to update its properties. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.attachedDisk">AttachedDisk</a></code> | <code>interface{}</code> | attached_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk">GoogleComputeInstanceFromTemplateBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | Whether sending and receiving of packets with non-matching source or destination IPs is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig">GoogleComputeInstanceFromTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether deletion protection is enabled on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.description">Description</a></code> | <code>*string</code> | A brief description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.desiredStatus">DesiredStatus</a></code> | <code>*string</code> | Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.enableDisplay">EnableDisplay</a></code> | <code>interface{}</code> | Whether the instance has virtual displays enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.guestAccelerator">GuestAccelerator</a></code> | <code>interface{}</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.hostname">Hostname</a></code> | <code>*string</code> | A custom hostname for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#id GoogleComputeInstanceFromTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>*string</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Metadata key/value pairs made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>*string</code> | Metadata startup scripts made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | The minimum CPU platform specified for the VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig">GoogleComputeInstanceFromTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams">GoogleComputeInstanceFromTemplateParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.partnerMetadata">PartnerMetadata</a></code> | <code>*map[string]*string</code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity">GoogleComputeInstanceFromTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling">GoogleComputeInstanceFromTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.scratchDisk">ScratchDisk</a></code> | <code>interface{}</code> | scratch_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount">GoogleComputeInstanceFromTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig">GoogleComputeInstanceFromTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | The list of tags attached to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts">GoogleComputeInstanceFromTemplateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone of the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#name GoogleComputeInstanceFromTemplate#name}

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.sourceInstanceTemplate"></a>

```go
SourceInstanceTemplate *string
```

- *Type:* *string

Name or self link of an instance template to create the instance based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#source_instance_template GoogleComputeInstanceFromTemplate#source_instance_template}

---

##### `AdvancedMachineFeatures`<sup>Optional</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.advancedMachineFeatures"></a>

```go
AdvancedMachineFeatures GoogleComputeInstanceFromTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures">GoogleComputeInstanceFromTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#advanced_machine_features GoogleComputeInstanceFromTemplate#advanced_machine_features}

---

##### `AllowStoppingForUpdate`<sup>Optional</sup> <a name="AllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.allowStoppingForUpdate"></a>

```go
AllowStoppingForUpdate interface{}
```

- *Type:* interface{}

If true, allows Terraform to stop the instance to update its properties.

If you try to update a property that requires stopping the instance without setting this field, the update will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#allow_stopping_for_update GoogleComputeInstanceFromTemplate#allow_stopping_for_update}

---

##### `AttachedDisk`<sup>Optional</sup> <a name="AttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.attachedDisk"></a>

```go
AttachedDisk interface{}
```

- *Type:* interface{}

attached_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#attached_disk GoogleComputeInstanceFromTemplate#attached_disk}

---

##### `BootDisk`<sup>Optional</sup> <a name="BootDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.bootDisk"></a>

```go
BootDisk GoogleComputeInstanceFromTemplateBootDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk">GoogleComputeInstanceFromTemplateBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#boot_disk GoogleComputeInstanceFromTemplate#boot_disk}

---

##### `CanIpForward`<sup>Optional</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.canIpForward"></a>

```go
CanIpForward interface{}
```

- *Type:* interface{}

Whether sending and receiving of packets with non-matching source or destination IPs is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#can_ip_forward GoogleComputeInstanceFromTemplate#can_ip_forward}

---

##### `ConfidentialInstanceConfig`<sup>Optional</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.confidentialInstanceConfig"></a>

```go
ConfidentialInstanceConfig GoogleComputeInstanceFromTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig">GoogleComputeInstanceFromTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#confidential_instance_config GoogleComputeInstanceFromTemplate#confidential_instance_config}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether deletion protection is enabled on this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#deletion_protection GoogleComputeInstanceFromTemplate#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A brief description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#description GoogleComputeInstanceFromTemplate#description}

---

##### `DesiredStatus`<sup>Optional</sup> <a name="DesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.desiredStatus"></a>

```go
DesiredStatus *string
```

- *Type:* *string

Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#desired_status GoogleComputeInstanceFromTemplate#desired_status}

---

##### `EnableDisplay`<sup>Optional</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.enableDisplay"></a>

```go
EnableDisplay interface{}
```

- *Type:* interface{}

Whether the instance has virtual displays enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#enable_display GoogleComputeInstanceFromTemplate#enable_display}

---

##### `GuestAccelerator`<sup>Optional</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.guestAccelerator"></a>

```go
GuestAccelerator interface{}
```

- *Type:* interface{}

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#guest_accelerator GoogleComputeInstanceFromTemplate#guest_accelerator}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

A custom hostname for the instance.

Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#hostname GoogleComputeInstanceFromTemplate#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#id GoogleComputeInstanceFromTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyRevocationActionType`<sup>Optional</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.keyRevocationActionType"></a>

```go
KeyRevocationActionType *string
```

- *Type:* *string

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#key_revocation_action_type GoogleComputeInstanceFromTemplate#key_revocation_action_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs assigned to the instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#labels GoogleComputeInstanceFromTemplate#labels}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#machine_type GoogleComputeInstanceFromTemplate#machine_type}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Metadata key/value pairs made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#metadata GoogleComputeInstanceFromTemplate#metadata}

---

##### `MetadataStartupScript`<sup>Optional</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.metadataStartupScript"></a>

```go
MetadataStartupScript *string
```

- *Type:* *string

Metadata startup scripts made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#metadata_startup_script GoogleComputeInstanceFromTemplate#metadata_startup_script}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.minCpuPlatform"></a>

```go
MinCpuPlatform *string
```

- *Type:* *string

The minimum CPU platform specified for the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#min_cpu_platform GoogleComputeInstanceFromTemplate#min_cpu_platform}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#network_interface GoogleComputeInstanceFromTemplate#network_interface}

---

##### `NetworkPerformanceConfig`<sup>Optional</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.networkPerformanceConfig"></a>

```go
NetworkPerformanceConfig GoogleComputeInstanceFromTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig">GoogleComputeInstanceFromTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#network_performance_config GoogleComputeInstanceFromTemplate#network_performance_config}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.params"></a>

```go
Params GoogleComputeInstanceFromTemplateParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams">GoogleComputeInstanceFromTemplateParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#params GoogleComputeInstanceFromTemplate#params}

---

##### `PartnerMetadata`<sup>Optional</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.partnerMetadata"></a>

```go
PartnerMetadata *map[string]*string
```

- *Type:* *map[string]*string

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#partner_metadata GoogleComputeInstanceFromTemplate#partner_metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#project GoogleComputeInstanceFromTemplate#project}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.reservationAffinity"></a>

```go
ReservationAffinity GoogleComputeInstanceFromTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity">GoogleComputeInstanceFromTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#reservation_affinity GoogleComputeInstanceFromTemplate#reservation_affinity}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.resourcePolicies"></a>

```go
ResourcePolicies *[]*string
```

- *Type:* *[]*string

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#resource_policies GoogleComputeInstanceFromTemplate#resource_policies}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.scheduling"></a>

```go
Scheduling GoogleComputeInstanceFromTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling">GoogleComputeInstanceFromTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#scheduling GoogleComputeInstanceFromTemplate#scheduling}

---

##### `ScratchDisk`<sup>Optional</sup> <a name="ScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.scratchDisk"></a>

```go
ScratchDisk interface{}
```

- *Type:* interface{}

scratch_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#scratch_disk GoogleComputeInstanceFromTemplate#scratch_disk}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.serviceAccount"></a>

```go
ServiceAccount GoogleComputeInstanceFromTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount">GoogleComputeInstanceFromTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#service_account GoogleComputeInstanceFromTemplate#service_account}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.shieldedInstanceConfig"></a>

```go
ShieldedInstanceConfig GoogleComputeInstanceFromTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig">GoogleComputeInstanceFromTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#shielded_instance_config GoogleComputeInstanceFromTemplate#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The list of tags attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#tags GoogleComputeInstanceFromTemplate#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeInstanceFromTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts">GoogleComputeInstanceFromTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#timeouts GoogleComputeInstanceFromTemplate#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#zone GoogleComputeInstanceFromTemplate#zone}

---

### GoogleComputeInstanceFromTemplateGuestAccelerator <a name="GoogleComputeInstanceFromTemplateGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateGuestAccelerator {
	Count: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAccelerator.property.count">Count</a></code> | <code>*f64</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAccelerator.property.type">Type</a></code> | <code>*string</code> | The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAccelerator.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#count GoogleComputeInstanceFromTemplate#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAccelerator.property.type"></a>

```go
Type *string
```

- *Type:* *string

The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#type GoogleComputeInstanceFromTemplate#type}

---

### GoogleComputeInstanceFromTemplateNetworkInterface <a name="GoogleComputeInstanceFromTemplateNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateNetworkInterface {
	AccessConfig: interface{},
	AliasIpRange: interface{},
	InternalIpv6PrefixLength: *f64,
	Ipv6AccessConfig: interface{},
	Ipv6Address: *string,
	Network: *string,
	NetworkAttachment: *string,
	NetworkIp: *string,
	NicType: *string,
	QueueCount: *f64,
	SecurityPolicy: *string,
	StackType: *string,
	Subnetwork: *string,
	SubnetworkProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.accessConfig">AccessConfig</a></code> | <code>interface{}</code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.aliasIpRange">AliasIpRange</a></code> | <code>interface{}</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>*f64</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code>interface{}</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.network">Network</a></code> | <code>*string</code> | The name or self_link of the network attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.networkIp">NetworkIp</a></code> | <code>*string</code> | The private IP address assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.nicType">NicType</a></code> | <code>*string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.queueCount">QueueCount</a></code> | <code>*f64</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | A full or partial URL to a security policy to add to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.stackType">StackType</a></code> | <code>*string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name or self_link of the subnetwork attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.subnetworkProject">SubnetworkProject</a></code> | <code>*string</code> | The project in which the subnetwork belongs. |

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.accessConfig"></a>

```go
AccessConfig interface{}
```

- *Type:* interface{}

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#access_config GoogleComputeInstanceFromTemplate#access_config}

---

##### `AliasIpRange`<sup>Optional</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.aliasIpRange"></a>

```go
AliasIpRange interface{}
```

- *Type:* interface{}

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#alias_ip_range GoogleComputeInstanceFromTemplate#alias_ip_range}

---

##### `InternalIpv6PrefixLength`<sup>Optional</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```go
InternalIpv6PrefixLength *f64
```

- *Type:* *f64

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#internal_ipv6_prefix_length GoogleComputeInstanceFromTemplate#internal_ipv6_prefix_length}

---

##### `Ipv6AccessConfig`<sup>Optional</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```go
Ipv6AccessConfig interface{}
```

- *Type:* interface{}

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#ipv6_access_config GoogleComputeInstanceFromTemplate#ipv6_access_config}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#ipv6_address GoogleComputeInstanceFromTemplate#ipv6_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name or self_link of the network attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#network GoogleComputeInstanceFromTemplate#network}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#network_attachment GoogleComputeInstanceFromTemplate#network_attachment}

---

##### `NetworkIp`<sup>Optional</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.networkIp"></a>

```go
NetworkIp *string
```

- *Type:* *string

The private IP address assigned to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#network_ip GoogleComputeInstanceFromTemplate#network_ip}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.nicType"></a>

```go
NicType *string
```

- *Type:* *string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#nic_type GoogleComputeInstanceFromTemplate#nic_type}

---

##### `QueueCount`<sup>Optional</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.queueCount"></a>

```go
QueueCount *f64
```

- *Type:* *f64

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#queue_count GoogleComputeInstanceFromTemplate#queue_count}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.securityPolicy"></a>

```go
SecurityPolicy *string
```

- *Type:* *string

A full or partial URL to a security policy to add to this instance.

If this field is set to an empty string it will remove the associated security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#security_policy GoogleComputeInstanceFromTemplate#security_policy}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.stackType"></a>

```go
StackType *string
```

- *Type:* *string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#stack_type GoogleComputeInstanceFromTemplate#stack_type}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name or self_link of the subnetwork attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#subnetwork GoogleComputeInstanceFromTemplate#subnetwork}

---

##### `SubnetworkProject`<sup>Optional</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterface.property.subnetworkProject"></a>

```go
SubnetworkProject *string
```

- *Type:* *string

The project in which the subnetwork belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#subnetwork_project GoogleComputeInstanceFromTemplate#subnetwork_project}

---

### GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig {
	NatIp: *string,
	NetworkTier: *string,
	PublicPtrDomainName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.natIp">NatIp</a></code> | <code>*string</code> | The IP address that is be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | The networking tier used for configuring this instance. One of PREMIUM or STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | The DNS domain name for the public PTR record. |

---

##### `NatIp`<sup>Optional</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```go
NatIp *string
```

- *Type:* *string

The IP address that is be 1:1 mapped to the instance's network ip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#nat_ip GoogleComputeInstanceFromTemplate#nat_ip}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

The networking tier used for configuring this instance. One of PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#network_tier GoogleComputeInstanceFromTemplate#network_tier}

---

##### `PublicPtrDomainName`<sup>Optional</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfig.property.publicPtrDomainName"></a>

```go
PublicPtrDomainName *string
```

- *Type:* *string

The DNS domain name for the public PTR record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#public_ptr_domain_name GoogleComputeInstanceFromTemplate#public_ptr_domain_name}

---

### GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRange <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRange {
	IpCidrRange: *string,
	SubnetworkRangeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>*string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```go
IpCidrRange *string
```

- *Type:* *string

The IP CIDR range represented by this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#ip_cidr_range GoogleComputeInstanceFromTemplate#ip_cidr_range}

---

##### `SubnetworkRangeName`<sup>Optional</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```go
SubnetworkRangeName *string
```

- *Type:* *string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#subnetwork_range_name GoogleComputeInstanceFromTemplate#subnetwork_range_name}

---

### GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig {
	NetworkTier: *string,
	ExternalIpv6: *string,
	ExternalIpv6PrefixLength: *string,
	Name: *string,
	PublicPtrDomainName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.externalIpv6">ExternalIpv6</a></code> | <code>*string</code> | The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>*string</code> | The prefix length of the external IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.name">Name</a></code> | <code>*string</code> | The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | The domain name to be used when creating DNSv6 records for the external IPv6 ranges. |

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#network_tier GoogleComputeInstanceFromTemplate#network_tier}

---

##### `ExternalIpv6`<sup>Optional</sup> <a name="ExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.externalIpv6"></a>

```go
ExternalIpv6 *string
```

- *Type:* *string

The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig.

To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#external_ipv6 GoogleComputeInstanceFromTemplate#external_ipv6}

---

##### `ExternalIpv6PrefixLength`<sup>Optional</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength"></a>

```go
ExternalIpv6PrefixLength *string
```

- *Type:* *string

The prefix length of the external IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#external_ipv6_prefix_length GoogleComputeInstanceFromTemplate#external_ipv6_prefix_length}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#name GoogleComputeInstanceFromTemplate#name}

---

##### `PublicPtrDomainName`<sup>Optional</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName"></a>

```go
PublicPtrDomainName *string
```

- *Type:* *string

The domain name to be used when creating DNSv6 records for the external IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#public_ptr_domain_name GoogleComputeInstanceFromTemplate#public_ptr_domain_name}

---

### GoogleComputeInstanceFromTemplateNetworkPerformanceConfig <a name="GoogleComputeInstanceFromTemplateNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig {
	TotalEgressBandwidthTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>*string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```go
TotalEgressBandwidthTier *string
```

- *Type:* *string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#total_egress_bandwidth_tier GoogleComputeInstanceFromTemplate#total_egress_bandwidth_tier}

---

### GoogleComputeInstanceFromTemplateParams <a name="GoogleComputeInstanceFromTemplateParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateParams {
	ResourceManagerTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | A map of resource manager tags. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#resource_manager_tags GoogleComputeInstanceFromTemplate#resource_manager_tags}

---

### GoogleComputeInstanceFromTemplateReservationAffinity <a name="GoogleComputeInstanceFromTemplateReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateReservationAffinity {
	Type: *string,
	SpecificReservation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity.property.type">Type</a></code> | <code>*string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#type GoogleComputeInstanceFromTemplate#type}

---

##### `SpecificReservation`<sup>Optional</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity.property.specificReservation"></a>

```go
SpecificReservation GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#specific_reservation GoogleComputeInstanceFromTemplate#specific_reservation}

---

### GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation <a name="GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation.property.key">Key</a></code> | <code>*string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation.property.values">Values</a></code> | <code>*[]*string</code> | Corresponds to the label values of a reservation resource. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation.property.key"></a>

```go
Key *string
```

- *Type:* *string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#key GoogleComputeInstanceFromTemplate#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#values GoogleComputeInstanceFromTemplate#values}

---

### GoogleComputeInstanceFromTemplateScheduling <a name="GoogleComputeInstanceFromTemplateScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateScheduling {
	AutomaticRestart: interface{},
	AvailabilityDomain: *f64,
	GracefulShutdown: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown,
	HostErrorTimeoutSeconds: *f64,
	InstanceTerminationAction: *string,
	LocalSsdRecoveryTimeout: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout,
	MaintenanceInterval: *string,
	MaxRunDuration: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration,
	MinNodeCpus: *f64,
	NodeAffinities: interface{},
	OnHostMaintenance: *string,
	OnInstanceStopAction: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction,
	Preemptible: interface{},
	ProvisioningModel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.automaticRestart">AutomaticRestart</a></code> | <code>interface{}</code> | Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*f64</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.gracefulShutdown">GracefulShutdown</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown</a></code> | graceful_shutdown block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>*f64</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>*string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>*string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration">GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.minNodeCpus">MinNodeCpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#min_node_cpus GoogleComputeInstanceFromTemplate#min_node_cpus}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.nodeAffinities">NodeAffinities</a></code> | <code>interface{}</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>*string</code> | Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | Whether the instance is preemptible. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.provisioningModel">ProvisioningModel</a></code> | <code>*string</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `AutomaticRestart`<sup>Optional</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.automaticRestart"></a>

```go
AutomaticRestart interface{}
```

- *Type:* interface{}

Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#automatic_restart GoogleComputeInstanceFromTemplate#automatic_restart}

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.availabilityDomain"></a>

```go
AvailabilityDomain *f64
```

- *Type:* *f64

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#availability_domain GoogleComputeInstanceFromTemplate#availability_domain}

---

##### `GracefulShutdown`<sup>Optional</sup> <a name="GracefulShutdown" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.gracefulShutdown"></a>

```go
GracefulShutdown GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown</a>

graceful_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#graceful_shutdown GoogleComputeInstanceFromTemplate#graceful_shutdown}

---

##### `HostErrorTimeoutSeconds`<sup>Optional</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.hostErrorTimeoutSeconds"></a>

```go
HostErrorTimeoutSeconds *f64
```

- *Type:* *f64

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#host_error_timeout_seconds GoogleComputeInstanceFromTemplate#host_error_timeout_seconds}

---

##### `InstanceTerminationAction`<sup>Optional</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.instanceTerminationAction"></a>

```go
InstanceTerminationAction *string
```

- *Type:* *string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#instance_termination_action GoogleComputeInstanceFromTemplate#instance_termination_action}

---

##### `LocalSsdRecoveryTimeout`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```go
LocalSsdRecoveryTimeout GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a>

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#local_ssd_recovery_timeout GoogleComputeInstanceFromTemplate#local_ssd_recovery_timeout}

---

##### `MaintenanceInterval`<sup>Optional</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.maintenanceInterval"></a>

```go
MaintenanceInterval *string
```

- *Type:* *string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#maintenance_interval GoogleComputeInstanceFromTemplate#maintenance_interval}

---

##### `MaxRunDuration`<sup>Optional</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.maxRunDuration"></a>

```go
MaxRunDuration GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration">GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#max_run_duration GoogleComputeInstanceFromTemplate#max_run_duration}

---

##### `MinNodeCpus`<sup>Optional</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.minNodeCpus"></a>

```go
MinNodeCpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#min_node_cpus GoogleComputeInstanceFromTemplate#min_node_cpus}.

---

##### `NodeAffinities`<sup>Optional</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.nodeAffinities"></a>

```go
NodeAffinities interface{}
```

- *Type:* interface{}

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#node_affinities GoogleComputeInstanceFromTemplate#node_affinities}

---

##### `OnHostMaintenance`<sup>Optional</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.onHostMaintenance"></a>

```go
OnHostMaintenance *string
```

- *Type:* *string

Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#on_host_maintenance GoogleComputeInstanceFromTemplate#on_host_maintenance}

---

##### `OnInstanceStopAction`<sup>Optional</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.onInstanceStopAction"></a>

```go
OnInstanceStopAction GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#on_instance_stop_action GoogleComputeInstanceFromTemplate#on_instance_stop_action}

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.preemptible"></a>

```go
Preemptible interface{}
```

- *Type:* interface{}

Whether the instance is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#preemptible GoogleComputeInstanceFromTemplate#preemptible}

---

##### `ProvisioningModel`<sup>Optional</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling.property.provisioningModel"></a>

```go
ProvisioningModel *string
```

- *Type:* *string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#provisioning_model GoogleComputeInstanceFromTemplate#provisioning_model}

---

### GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown <a name="GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown {
	Enabled: interface{},
	MaxDuration: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown.property.enabled">Enabled</a></code> | <code>interface{}</code> | Opts-in for graceful shutdown. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown.property.maxDuration">MaxDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration</a></code> | max_duration block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Opts-in for graceful shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#enabled GoogleComputeInstanceFromTemplate#enabled}

---

##### `MaxDuration`<sup>Optional</sup> <a name="MaxDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown.property.maxDuration"></a>

```go
MaxDuration GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration</a>

max_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#max_duration GoogleComputeInstanceFromTemplate#max_duration}

---

### GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration <a name="GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond 													resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second.

The value must be between 1 and 3600, which is 3,600 seconds (one hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#seconds GoogleComputeInstanceFromTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond 													resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#nanos GoogleComputeInstanceFromTemplate#nanos}

---

### GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#seconds GoogleComputeInstanceFromTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#nanos GoogleComputeInstanceFromTemplate#nanos}

---

### GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration <a name="GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#seconds GoogleComputeInstanceFromTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#nanos GoogleComputeInstanceFromTemplate#nanos}

---

### GoogleComputeInstanceFromTemplateSchedulingNodeAffinities <a name="GoogleComputeInstanceFromTemplateSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinities {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinities.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#key GoogleComputeInstanceFromTemplate#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinities.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#operator GoogleComputeInstanceFromTemplate#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinities.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#values GoogleComputeInstanceFromTemplate#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinities.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#key GoogleComputeInstanceFromTemplate#key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinities.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#operator GoogleComputeInstanceFromTemplate#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinities.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#values GoogleComputeInstanceFromTemplate#values}.

---

### GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction <a name="GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction {
	DiscardLocalSsd: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>interface{}</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `DiscardLocalSsd`<sup>Optional</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```go
DiscardLocalSsd interface{}
```

- *Type:* interface{}

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#discard_local_ssd GoogleComputeInstanceFromTemplate#discard_local_ssd}

---

### GoogleComputeInstanceFromTemplateScratchDisk <a name="GoogleComputeInstanceFromTemplateScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateScratchDisk {
	Interface: *string,
	DeviceName: *string,
	Size: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDisk.property.interface">Interface</a></code> | <code>*string</code> | The disk interface used for attaching this disk. One of SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDisk.property.deviceName">DeviceName</a></code> | <code>*string</code> | Name with which the attached disk is accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDisk.property.size">Size</a></code> | <code>*f64</code> | The size of the disk in gigabytes. One of 375 or 3000. |

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDisk.property.interface"></a>

```go
Interface *string
```

- *Type:* *string

The disk interface used for attaching this disk. One of SCSI or NVME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#interface GoogleComputeInstanceFromTemplate#interface}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDisk.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Name with which the attached disk is accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#device_name GoogleComputeInstanceFromTemplate#device_name}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDisk.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The size of the disk in gigabytes. One of 375 or 3000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#size GoogleComputeInstanceFromTemplate#size}

---

### GoogleComputeInstanceFromTemplateServiceAccount <a name="GoogleComputeInstanceFromTemplateServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateServiceAccount {
	Scopes: *[]*string,
	Email: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount.property.scopes">Scopes</a></code> | <code>*[]*string</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount.property.email">Email</a></code> | <code>*string</code> | The service account e-mail address. |

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

A list of service scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#scopes GoogleComputeInstanceFromTemplate#scopes}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount.property.email"></a>

```go
Email *string
```

- *Type:* *string

The service account e-mail address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#email GoogleComputeInstanceFromTemplate#email}

---

### GoogleComputeInstanceFromTemplateShieldedInstanceConfig <a name="GoogleComputeInstanceFromTemplateShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig {
	EnableIntegrityMonitoring: interface{},
	EnableSecureBoot: interface{},
	EnableVtpm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | Whether integrity monitoring is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | Whether secure boot is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | Whether the instance uses vTPM. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```go
EnableIntegrityMonitoring interface{}
```

- *Type:* interface{}

Whether integrity monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#enable_integrity_monitoring GoogleComputeInstanceFromTemplate#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```go
EnableSecureBoot interface{}
```

- *Type:* interface{}

Whether secure boot is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#enable_secure_boot GoogleComputeInstanceFromTemplate#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```go
EnableVtpm interface{}
```

- *Type:* interface{}

Whether the instance uses vTPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#enable_vtpm GoogleComputeInstanceFromTemplate#enable_vtpm}

---

### GoogleComputeInstanceFromTemplateTimeouts <a name="GoogleComputeInstanceFromTemplateTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

&googlecomputeinstancefromtemplate.GoogleComputeInstanceFromTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#create GoogleComputeInstanceFromTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#delete GoogleComputeInstanceFromTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#update GoogleComputeInstanceFromTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#create GoogleComputeInstanceFromTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#delete GoogleComputeInstanceFromTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instance_from_template#update GoogleComputeInstanceFromTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference <a name="GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">ResetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">ResetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode">ResetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">ResetVisibleCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```go
func ResetEnableNestedVirtualization()
```

##### `ResetEnableUefiNetworking` <a name="ResetEnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```go
func ResetEnableUefiNetworking()
```

##### `ResetPerformanceMonitoringUnit` <a name="ResetPerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```go
func ResetPerformanceMonitoringUnit()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```go
func ResetThreadsPerCore()
```

##### `ResetTurboMode` <a name="ResetTurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```go
func ResetTurboMode()
```

##### `ResetVisibleCoreCount` <a name="ResetVisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```go
func ResetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">EnableUefiNetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">PerformanceMonitoringUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput">TurboModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">VisibleCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">TurboMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures">GoogleComputeInstanceFromTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```go
func EnableNestedVirtualizationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableUefiNetworkingInput`<sup>Optional</sup> <a name="EnableUefiNetworkingInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```go
func EnableUefiNetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `PerformanceMonitoringUnitInput`<sup>Optional</sup> <a name="PerformanceMonitoringUnitInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```go
func PerformanceMonitoringUnitInput() *string
```

- *Type:* *string

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```go
func ThreadsPerCoreInput() *f64
```

- *Type:* *f64

---

##### `TurboModeInput`<sup>Optional</sup> <a name="TurboModeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```go
func TurboModeInput() *string
```

- *Type:* *string

---

##### `VisibleCoreCountInput`<sup>Optional</sup> <a name="VisibleCoreCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```go
func VisibleCoreCountInput() *f64
```

- *Type:* *f64

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```go
func EnableNestedVirtualization() interface{}
```

- *Type:* interface{}

---

##### `EnableUefiNetworking`<sup>Required</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```go
func EnableUefiNetworking() interface{}
```

- *Type:* interface{}

---

##### `PerformanceMonitoringUnit`<sup>Required</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```go
func PerformanceMonitoringUnit() *string
```

- *Type:* *string

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `TurboMode`<sup>Required</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```go
func TurboMode() *string
```

- *Type:* *string

---

##### `VisibleCoreCount`<sup>Required</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```go
func VisibleCoreCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAdvancedMachineFeatures">GoogleComputeInstanceFromTemplateAdvancedMachineFeatures</a>

---


### GoogleComputeInstanceFromTemplateAttachedDiskList <a name="GoogleComputeInstanceFromTemplateAttachedDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateAttachedDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceFromTemplateAttachedDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceFromTemplateAttachedDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateAttachedDiskOutputReference <a name="GoogleComputeInstanceFromTemplateAttachedDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateAttachedDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceFromTemplateAttachedDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resetDiskEncryptionKeyRaw">ResetDiskEncryptionKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetDiskEncryptionKeyRaw` <a name="ResetDiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resetDiskEncryptionKeyRaw"></a>

```go
func ResetDiskEncryptionKeyRaw()
```

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resetKmsKeySelfLink"></a>

```go
func ResetKmsKeySelfLink()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeySha256">DiskEncryptionKeySha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRawInput">DiskEncryptionKeyRawInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskEncryptionKeySha256`<sup>Required</sup> <a name="DiskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeySha256"></a>

```go
func DiskEncryptionKeySha256() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionKeyRawInput`<sup>Optional</sup> <a name="DiskEncryptionKeyRawInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRawInput"></a>

```go
func DiskEncryptionKeyRawInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `DiskEncryptionKeyRaw`<sup>Required</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```go
func DiskEncryptionKeyRaw() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateAttachedDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference <a name="GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetProvisionedIops">ResetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetStoragePool">ResetStoragePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetEnableConfidentialCompute"></a>

```go
func ResetEnableConfidentialCompute()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProvisionedIops` <a name="ResetProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetProvisionedIops"></a>

```go
func ResetProvisionedIops()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetProvisionedThroughput"></a>

```go
func ResetProvisionedThroughput()
```

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetResourcePolicies"></a>

```go
func ResetResourcePolicies()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetSize"></a>

```go
func ResetSize()
```

##### `ResetStoragePool` <a name="ResetStoragePool" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetStoragePool"></a>

```go
func ResetStoragePool()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedIopsInput">ProvisionedIopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.storagePoolInput">StoragePoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedIops">ProvisionedIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.storagePool">StoragePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams">GoogleComputeInstanceFromTemplateBootDiskInitializeParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.enableConfidentialComputeInput"></a>

```go
func EnableConfidentialComputeInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProvisionedIopsInput`<sup>Optional</sup> <a name="ProvisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedIopsInput"></a>

```go
func ProvisionedIopsInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedThroughputInput"></a>

```go
func ProvisionedThroughputInput() *f64
```

- *Type:* *f64

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourcePoliciesInput"></a>

```go
func ResourcePoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.storagePoolInput"></a>

```go
func StoragePoolInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute"></a>

```go
func EnableConfidentialCompute() interface{}
```

- *Type:* interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedIops"></a>

```go
func ProvisionedIops() *f64
```

- *Type:* *f64

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.resourcePolicies"></a>

```go
func ResourcePolicies() *[]*string
```

- *Type:* *[]*string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.storagePool"></a>

```go
func StoragePool() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateBootDiskInitializeParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams">GoogleComputeInstanceFromTemplateBootDiskInitializeParams</a>

---


### GoogleComputeInstanceFromTemplateBootDiskOutputReference <a name="GoogleComputeInstanceFromTemplateBootDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateBootDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateBootDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.putInitializeParams">PutInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetDiskEncryptionKeyRaw">ResetDiskEncryptionKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetInitializeParams">ResetInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitializeParams` <a name="PutInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.putInitializeParams"></a>

```go
func PutInitializeParams(value GoogleComputeInstanceFromTemplateBootDiskInitializeParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams">GoogleComputeInstanceFromTemplateBootDiskInitializeParams</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetAutoDelete"></a>

```go
func ResetAutoDelete()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetDiskEncryptionKeyRaw` <a name="ResetDiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetDiskEncryptionKeyRaw"></a>

```go
func ResetDiskEncryptionKeyRaw()
```

##### `ResetInitializeParams` <a name="ResetInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetInitializeParams"></a>

```go
func ResetInitializeParams()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetInterface"></a>

```go
func ResetInterface()
```

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetKmsKeySelfLink"></a>

```go
func ResetKmsKeySelfLink()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeySha256">DiskEncryptionKeySha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference">GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRawInput">DiskEncryptionKeyRawInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.initializeParamsInput">InitializeParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams">GoogleComputeInstanceFromTemplateBootDiskInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk">GoogleComputeInstanceFromTemplateBootDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskEncryptionKeySha256`<sup>Required</sup> <a name="DiskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeySha256"></a>

```go
func DiskEncryptionKeySha256() *string
```

- *Type:* *string

---

##### `InitializeParams`<sup>Required</sup> <a name="InitializeParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.initializeParams"></a>

```go
func InitializeParams() GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference">GoogleComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.autoDeleteInput"></a>

```go
func AutoDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionKeyRawInput`<sup>Optional</sup> <a name="DiskEncryptionKeyRawInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRawInput"></a>

```go
func DiskEncryptionKeyRawInput() *string
```

- *Type:* *string

---

##### `InitializeParamsInput`<sup>Optional</sup> <a name="InitializeParamsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.initializeParamsInput"></a>

```go
func InitializeParamsInput() GoogleComputeInstanceFromTemplateBootDiskInitializeParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskInitializeParams">GoogleComputeInstanceFromTemplateBootDiskInitializeParams</a>

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.interfaceInput"></a>

```go
func InterfaceInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.autoDelete"></a>

```go
func AutoDelete() interface{}
```

- *Type:* interface{}

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `DiskEncryptionKeyRaw`<sup>Required</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```go
func DiskEncryptionKeyRaw() *string
```

- *Type:* *string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateBootDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateBootDisk">GoogleComputeInstanceFromTemplateBootDisk</a>

---


### GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference <a name="GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">ResetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidentialInstanceType` <a name="ResetConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```go
func ResetConfidentialInstanceType()
```

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```go
func ResetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">ConfidentialInstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig">GoogleComputeInstanceFromTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidentialInstanceTypeInput`<sup>Optional</sup> <a name="ConfidentialInstanceTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```go
func ConfidentialInstanceTypeInput() *string
```

- *Type:* *string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```go
func EnableConfidentialComputeInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialInstanceType`<sup>Required</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```go
func ConfidentialInstanceType() *string
```

- *Type:* *string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```go
func EnableConfidentialCompute() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateConfidentialInstanceConfig">GoogleComputeInstanceFromTemplateConfidentialInstanceConfig</a>

---


### GoogleComputeInstanceFromTemplateGuestAcceleratorList <a name="GoogleComputeInstanceFromTemplateGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateGuestAcceleratorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceFromTemplateGuestAcceleratorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference <a name="GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">ResetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName">ResetPublicPtrDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNatIp` <a name="ResetNatIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```go
func ResetNatIp()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```go
func ResetNetworkTier()
```

##### `ResetPublicPtrDomainName` <a name="ResetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName"></a>

```go
func ResetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">NatIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput">PublicPtrDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">NatIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `NatIpInput`<sup>Optional</sup> <a name="NatIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```go
func NatIpInput() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `PublicPtrDomainNameInput`<sup>Optional</sup> <a name="PublicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```go
func PublicPtrDomainNameInput() *string
```

- *Type:* *string

---

##### `NatIp`<sup>Required</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```go
func NatIp() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```go
func PublicPtrDomainName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">ResetSubnetworkRangeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetworkRangeName` <a name="ResetSubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```go
func ResetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">SubnetworkRangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```go
func IpCidrRangeInput() *string
```

- *Type:* *string

---

##### `SubnetworkRangeNameInput`<sup>Optional</sup> <a name="SubnetworkRangeNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```go
func SubnetworkRangeNameInput() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `SubnetworkRangeName`<sup>Required</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```go
func SubnetworkRangeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6">ResetExternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength">ResetExternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName">ResetPublicPtrDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalIpv6` <a name="ResetExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6"></a>

```go
func ResetExternalIpv6()
```

##### `ResetExternalIpv6PrefixLength` <a name="ResetExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength"></a>

```go
func ResetExternalIpv6PrefixLength()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPublicPtrDomainName` <a name="ResetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName"></a>

```go
func ResetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input">ExternalIpv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput">ExternalIpv6PrefixLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput">PublicPtrDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">ExternalIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `ExternalIpv6Input`<sup>Optional</sup> <a name="ExternalIpv6Input" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input"></a>

```go
func ExternalIpv6Input() *string
```

- *Type:* *string

---

##### `ExternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="ExternalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput"></a>

```go
func ExternalIpv6PrefixLengthInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `PublicPtrDomainNameInput`<sup>Optional</sup> <a name="PublicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```go
func PublicPtrDomainNameInput() *string
```

- *Type:* *string

---

##### `ExternalIpv6`<sup>Required</sup> <a name="ExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```go
func ExternalIpv6() *string
```

- *Type:* *string

---

##### `ExternalIpv6PrefixLength`<sup>Required</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```go
func ExternalIpv6PrefixLength() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```go
func PublicPtrDomainName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateNetworkInterfaceList <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceFromTemplateNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference <a name="GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAliasIpRange">PutAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">PutIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetAliasIpRange">ResetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">ResetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">ResetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetworkIp">ResetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetQueueCount">ResetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">ResetSubnetworkProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```go
func PutAccessConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAliasIpRange` <a name="PutAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```go
func PutAliasIpRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIpv6AccessConfig` <a name="PutIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```go
func PutIpv6AccessConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```go
func ResetAccessConfig()
```

##### `ResetAliasIpRange` <a name="ResetAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```go
func ResetAliasIpRange()
```

##### `ResetInternalIpv6PrefixLength` <a name="ResetInternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```go
func ResetInternalIpv6PrefixLength()
```

##### `ResetIpv6AccessConfig` <a name="ResetIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```go
func ResetIpv6AccessConfig()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```

##### `ResetNetworkIp` <a name="ResetNetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```go
func ResetNetworkIp()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```go
func ResetNicType()
```

##### `ResetQueueCount` <a name="ResetQueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```go
func ResetQueueCount()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSecurityPolicy"></a>

```go
func ResetSecurityPolicy()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```go
func ResetStackType()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetSubnetworkProject` <a name="ResetSubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```go
func ResetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList">GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.aliasIpRange">AliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">AliasIpRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">InternalIpv6PrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">Ipv6AccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkIpInput">NetworkIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.queueCountInput">QueueCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.stackTypeInput">StackTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">SubnetworkProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkIp">NetworkIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.nicType">NicType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.queueCount">QueueCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.stackType">StackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkProject">SubnetworkProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```go
func AccessConfig() GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList">GoogleComputeInstanceFromTemplateNetworkInterfaceAccessConfigList</a>

---

##### `AliasIpRange`<sup>Required</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```go
func AliasIpRange() GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceFromTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `Ipv6AccessConfig`<sup>Required</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```go
func Ipv6AccessConfig() GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```go
func Ipv6AccessType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```go
func AccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AliasIpRangeInput`<sup>Optional</sup> <a name="AliasIpRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```go
func AliasIpRangeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="InternalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```go
func InternalIpv6PrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `Ipv6AccessConfigInput`<sup>Optional</sup> <a name="Ipv6AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```go
func Ipv6AccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NetworkIpInput`<sup>Optional</sup> <a name="NetworkIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```go
func NetworkIpInput() *string
```

- *Type:* *string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```go
func NicTypeInput() *string
```

- *Type:* *string

---

##### `QueueCountInput`<sup>Optional</sup> <a name="QueueCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```go
func QueueCountInput() *f64
```

- *Type:* *f64

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.securityPolicyInput"></a>

```go
func SecurityPolicyInput() *string
```

- *Type:* *string

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```go
func StackTypeInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkProjectInput`<sup>Optional</sup> <a name="SubnetworkProjectInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```go
func SubnetworkProjectInput() *string
```

- *Type:* *string

---

##### `InternalIpv6PrefixLength`<sup>Required</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```go
func InternalIpv6PrefixLength() *f64
```

- *Type:* *f64

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `NetworkIp`<sup>Required</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```go
func NetworkIp() *string
```

- *Type:* *string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```go
func NicType() *string
```

- *Type:* *string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```go
func QueueCount() *f64
```

- *Type:* *f64

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```go
func StackType() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `SubnetworkProject`<sup>Required</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```go
func SubnetworkProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference <a name="GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">TotalEgressBandwidthTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig">GoogleComputeInstanceFromTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalEgressBandwidthTierInput`<sup>Optional</sup> <a name="TotalEgressBandwidthTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```go
func TotalEgressBandwidthTierInput() *string
```

- *Type:* *string

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```go
func TotalEgressBandwidthTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateNetworkPerformanceConfig">GoogleComputeInstanceFromTemplateNetworkPerformanceConfig</a>

---


### GoogleComputeInstanceFromTemplateParamsOutputReference <a name="GoogleComputeInstanceFromTemplateParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams">GoogleComputeInstanceFromTemplateParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateParams">GoogleComputeInstanceFromTemplateParams</a>

---


### GoogleComputeInstanceFromTemplateReservationAffinityOutputReference <a name="GoogleComputeInstanceFromTemplateReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateReservationAffinityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateReservationAffinityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.resetSpecificReservation">ResetSpecificReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```go
func PutSpecificReservation(value GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation</a>

---

##### `ResetSpecificReservation` <a name="ResetSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```go
func ResetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity">GoogleComputeInstanceFromTemplateReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```go
func SpecificReservation() GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```go
func SpecificReservationInput() GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinity">GoogleComputeInstanceFromTemplateReservationAffinity</a>

---


### GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceFromTemplateReservationAffinitySpecificReservation</a>

---


### GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference <a name="GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration</a>

---


### GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference <a name="GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration">PutMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.resetMaxDuration">ResetMaxDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxDuration` <a name="PutMaxDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration"></a>

```go
func PutMaxDuration(value GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration</a>

---

##### `ResetMaxDuration` <a name="ResetMaxDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.resetMaxDuration"></a>

```go
func ResetMaxDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration">MaxDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.maxDurationInput">MaxDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration"></a>

```go
func MaxDuration() GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDurationOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxDurationInput`<sup>Optional</sup> <a name="MaxDurationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.maxDurationInput"></a>

```go
func MaxDurationInput() GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownMaxDuration</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown</a>

---


### GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference <a name="GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration">GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration">GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration</a>

---


### GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList <a name="GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">ResetDiscardLocalSsd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiscardLocalSsd` <a name="ResetDiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```go
func ResetDiscardLocalSsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">DiscardLocalSsdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiscardLocalSsdInput`<sup>Optional</sup> <a name="DiscardLocalSsdInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```go
func DiscardLocalSsdInput() interface{}
```

- *Type:* interface{}

---

##### `DiscardLocalSsd`<sup>Required</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```go
func DiscardLocalSsd() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a>

---


### GoogleComputeInstanceFromTemplateSchedulingOutputReference <a name="GoogleComputeInstanceFromTemplateSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateSchedulingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateSchedulingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putGracefulShutdown">PutGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">PutLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putMaxRunDuration">PutMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putNodeAffinities">PutNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putOnInstanceStopAction">PutOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetAutomaticRestart">ResetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetGracefulShutdown">ResetGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds">ResetHostErrorTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetInstanceTerminationAction">ResetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">ResetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetMaintenanceInterval">ResetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetMaxRunDuration">ResetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetMinNodeCpus">ResetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetNodeAffinities">ResetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetOnHostMaintenance">ResetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetOnInstanceStopAction">ResetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetProvisioningModel">ResetProvisioningModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGracefulShutdown` <a name="PutGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putGracefulShutdown"></a>

```go
func PutGracefulShutdown(value GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putGracefulShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown</a>

---

##### `PutLocalSsdRecoveryTimeout` <a name="PutLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```go
func PutLocalSsdRecoveryTimeout(value GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a>

---

##### `PutMaxRunDuration` <a name="PutMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putMaxRunDuration"></a>

```go
func PutMaxRunDuration(value GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration">GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration</a>

---

##### `PutNodeAffinities` <a name="PutNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putNodeAffinities"></a>

```go
func PutNodeAffinities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOnInstanceStopAction` <a name="PutOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putOnInstanceStopAction"></a>

```go
func PutOnInstanceStopAction(value GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a>

---

##### `ResetAutomaticRestart` <a name="ResetAutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```go
func ResetAutomaticRestart()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetGracefulShutdown` <a name="ResetGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetGracefulShutdown"></a>

```go
func ResetGracefulShutdown()
```

##### `ResetHostErrorTimeoutSeconds` <a name="ResetHostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```go
func ResetHostErrorTimeoutSeconds()
```

##### `ResetInstanceTerminationAction` <a name="ResetInstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```go
func ResetInstanceTerminationAction()
```

##### `ResetLocalSsdRecoveryTimeout` <a name="ResetLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```go
func ResetLocalSsdRecoveryTimeout()
```

##### `ResetMaintenanceInterval` <a name="ResetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetMaintenanceInterval"></a>

```go
func ResetMaintenanceInterval()
```

##### `ResetMaxRunDuration` <a name="ResetMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetMaxRunDuration"></a>

```go
func ResetMaxRunDuration()
```

##### `ResetMinNodeCpus` <a name="ResetMinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```go
func ResetMinNodeCpus()
```

##### `ResetNodeAffinities` <a name="ResetNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```go
func ResetNodeAffinities()
```

##### `ResetOnHostMaintenance` <a name="ResetOnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```go
func ResetOnHostMaintenance()
```

##### `ResetOnInstanceStopAction` <a name="ResetOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetOnInstanceStopAction"></a>

```go
func ResetOnInstanceStopAction()
```

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetPreemptible"></a>

```go
func ResetPreemptible()
```

##### `ResetProvisioningModel` <a name="ResetProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```go
func ResetProvisioningModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.gracefulShutdown">GracefulShutdown</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.nodeAffinities">NodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList">GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.automaticRestartInput">AutomaticRestartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.gracefulShutdownInput">GracefulShutdownInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">HostErrorTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.instanceTerminationActionInput">InstanceTerminationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">LocalSsdRecoveryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.maintenanceIntervalInput">MaintenanceIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.maxRunDurationInput">MaxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration">GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.minNodeCpusInput">MinNodeCpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.nodeAffinitiesInput">NodeAffinitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.onHostMaintenanceInput">OnHostMaintenanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.onInstanceStopActionInput">OnInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.provisioningModelInput">ProvisioningModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.automaticRestart">AutomaticRestart</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.minNodeCpus">MinNodeCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.provisioningModel">ProvisioningModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling">GoogleComputeInstanceFromTemplateScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GracefulShutdown`<sup>Required</sup> <a name="GracefulShutdown" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.gracefulShutdown"></a>

```go
func GracefulShutdown() GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdownOutputReference</a>

---

##### `LocalSsdRecoveryTimeout`<sup>Required</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```go
func LocalSsdRecoveryTimeout() GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference</a>

---

##### `MaxRunDuration`<sup>Required</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```go
func MaxRunDuration() GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceFromTemplateSchedulingMaxRunDurationOutputReference</a>

---

##### `NodeAffinities`<sup>Required</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```go
func NodeAffinities() GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList">GoogleComputeInstanceFromTemplateSchedulingNodeAffinitiesList</a>

---

##### `OnInstanceStopAction`<sup>Required</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```go
func OnInstanceStopAction() GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopActionOutputReference</a>

---

##### `AutomaticRestartInput`<sup>Optional</sup> <a name="AutomaticRestartInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```go
func AutomaticRestartInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *f64
```

- *Type:* *f64

---

##### `GracefulShutdownInput`<sup>Optional</sup> <a name="GracefulShutdownInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.gracefulShutdownInput"></a>

```go
func GracefulShutdownInput() GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown">GoogleComputeInstanceFromTemplateSchedulingGracefulShutdown</a>

---

##### `HostErrorTimeoutSecondsInput`<sup>Optional</sup> <a name="HostErrorTimeoutSecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```go
func HostErrorTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `InstanceTerminationActionInput`<sup>Optional</sup> <a name="InstanceTerminationActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```go
func InstanceTerminationActionInput() *string
```

- *Type:* *string

---

##### `LocalSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeoutInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```go
func LocalSsdRecoveryTimeoutInput() GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromTemplateSchedulingLocalSsdRecoveryTimeout</a>

---

##### `MaintenanceIntervalInput`<sup>Optional</sup> <a name="MaintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```go
func MaintenanceIntervalInput() *string
```

- *Type:* *string

---

##### `MaxRunDurationInput`<sup>Optional</sup> <a name="MaxRunDurationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.maxRunDurationInput"></a>

```go
func MaxRunDurationInput() GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration">GoogleComputeInstanceFromTemplateSchedulingMaxRunDuration</a>

---

##### `MinNodeCpusInput`<sup>Optional</sup> <a name="MinNodeCpusInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```go
func MinNodeCpusInput() *f64
```

- *Type:* *f64

---

##### `NodeAffinitiesInput`<sup>Optional</sup> <a name="NodeAffinitiesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```go
func NodeAffinitiesInput() interface{}
```

- *Type:* interface{}

---

##### `OnHostMaintenanceInput`<sup>Optional</sup> <a name="OnHostMaintenanceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```go
func OnHostMaintenanceInput() *string
```

- *Type:* *string

---

##### `OnInstanceStopActionInput`<sup>Optional</sup> <a name="OnInstanceStopActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```go
func OnInstanceStopActionInput() GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceFromTemplateSchedulingOnInstanceStopAction</a>

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```go
func PreemptibleInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningModelInput`<sup>Optional</sup> <a name="ProvisioningModelInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```go
func ProvisioningModelInput() *string
```

- *Type:* *string

---

##### `AutomaticRestart`<sup>Required</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.automaticRestart"></a>

```go
func AutomaticRestart() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *f64
```

- *Type:* *f64

---

##### `HostErrorTimeoutSeconds`<sup>Required</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```go
func HostErrorTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InstanceTerminationAction`<sup>Required</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```go
func InstanceTerminationAction() *string
```

- *Type:* *string

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.maintenanceInterval"></a>

```go
func MaintenanceInterval() *string
```

- *Type:* *string

---

##### `MinNodeCpus`<sup>Required</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```go
func MinNodeCpus() *f64
```

- *Type:* *f64

---

##### `OnHostMaintenance`<sup>Required</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```go
func OnHostMaintenance() *string
```

- *Type:* *string

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.preemptible"></a>

```go
func Preemptible() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningModel`<sup>Required</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.provisioningModel"></a>

```go
func ProvisioningModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateSchedulingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScheduling">GoogleComputeInstanceFromTemplateScheduling</a>

---


### GoogleComputeInstanceFromTemplateScratchDiskList <a name="GoogleComputeInstanceFromTemplateScratchDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateScratchDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceFromTemplateScratchDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceFromTemplateScratchDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateScratchDiskOutputReference <a name="GoogleComputeInstanceFromTemplateScratchDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateScratchDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceFromTemplateScratchDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.resetSize"></a>

```go
func ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.interfaceInput"></a>

```go
func InterfaceInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateScratchDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceFromTemplateServiceAccountOutputReference <a name="GoogleComputeInstanceFromTemplateServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.resetEmail"></a>

```go
func ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount">GoogleComputeInstanceFromTemplateServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateServiceAccount">GoogleComputeInstanceFromTemplateServiceAccount</a>

---


### GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference <a name="GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```go
func ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```go
func ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```go
func ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig">GoogleComputeInstanceFromTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```go
func EnableIntegrityMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```go
func EnableSecureBootInput() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```go
func EnableVtpmInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```go
func EnableIntegrityMonitoring() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```go
func EnableSecureBoot() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```go
func EnableVtpm() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceFromTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateShieldedInstanceConfig">GoogleComputeInstanceFromTemplateShieldedInstanceConfig</a>

---


### GoogleComputeInstanceFromTemplateTimeoutsOutputReference <a name="GoogleComputeInstanceFromTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancefromtemplate"

googlecomputeinstancefromtemplate.NewGoogleComputeInstanceFromTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceFromTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromTemplate.GoogleComputeInstanceFromTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



