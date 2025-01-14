# `googleComputeInstanceTemplate` Submodule <a name="`googleComputeInstanceTemplate` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceTemplate <a name="GoogleComputeInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template google_compute_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplate(scope Construct, id *string, config GoogleComputeInstanceTemplateConfig) GoogleComputeInstanceTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig">GoogleComputeInstanceTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig">GoogleComputeInstanceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures">PutAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig">PutConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putDisk">PutDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putGuestAccelerator">PutGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkPerformanceConfig">PutNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetAdvancedMachineFeatures">ResetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetCanIpForward">ResetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetConfidentialInstanceConfig">ResetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetEnableDisplay">ResetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetGuestAccelerator">ResetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetInstanceDescription">ResetInstanceDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetKeyRevocationActionType">ResetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadataStartupScript">ResetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkPerformanceConfig">ResetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetPartnerMetadata">ResetPartnerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedMachineFeatures` <a name="PutAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures"></a>

```go
func PutAdvancedMachineFeatures(value GoogleComputeInstanceTemplateAdvancedMachineFeatures)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---

##### `PutConfidentialInstanceConfig` <a name="PutConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig"></a>

```go
func PutConfidentialInstanceConfig(value GoogleComputeInstanceTemplateConfidentialInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---

##### `PutDisk` <a name="PutDisk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putDisk"></a>

```go
func PutDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGuestAccelerator` <a name="PutGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putGuestAccelerator"></a>

```go
func PutGuestAccelerator(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkPerformanceConfig` <a name="PutNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkPerformanceConfig"></a>

```go
func PutNetworkPerformanceConfig(value GoogleComputeInstanceTemplateNetworkPerformanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity"></a>

```go
func PutReservationAffinity(value GoogleComputeInstanceTemplateReservationAffinity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling"></a>

```go
func PutScheduling(value GoogleComputeInstanceTemplateScheduling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

---

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount"></a>

```go
func PutServiceAccount(value GoogleComputeInstanceTemplateServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig"></a>

```go
func PutShieldedInstanceConfig(value GoogleComputeInstanceTemplateShieldedInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeInstanceTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>

---

##### `ResetAdvancedMachineFeatures` <a name="ResetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetAdvancedMachineFeatures"></a>

```go
func ResetAdvancedMachineFeatures()
```

##### `ResetCanIpForward` <a name="ResetCanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetCanIpForward"></a>

```go
func ResetCanIpForward()
```

##### `ResetConfidentialInstanceConfig` <a name="ResetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetConfidentialInstanceConfig"></a>

```go
func ResetConfidentialInstanceConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableDisplay` <a name="ResetEnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetEnableDisplay"></a>

```go
func ResetEnableDisplay()
```

##### `ResetGuestAccelerator` <a name="ResetGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetGuestAccelerator"></a>

```go
func ResetGuestAccelerator()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceDescription` <a name="ResetInstanceDescription" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetInstanceDescription"></a>

```go
func ResetInstanceDescription()
```

##### `ResetKeyRevocationActionType` <a name="ResetKeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetKeyRevocationActionType"></a>

```go
func ResetKeyRevocationActionType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMetadataStartupScript` <a name="ResetMetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadataStartupScript"></a>

```go
func ResetMetadataStartupScript()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMinCpuPlatform"></a>

```go
func ResetMinCpuPlatform()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetNetworkPerformanceConfig` <a name="ResetNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkPerformanceConfig"></a>

```go
func ResetNetworkPerformanceConfig()
```

##### `ResetPartnerMetadata` <a name="ResetPartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetPartnerMetadata"></a>

```go
func ResetPartnerMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetReservationAffinity"></a>

```go
func ResetReservationAffinity()
```

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourcePolicies"></a>

```go
func ResetResourcePolicies()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetScheduling"></a>

```go
func ResetScheduling()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetShieldedInstanceConfig"></a>

```go
func ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.GoogleComputeInstanceTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.GoogleComputeInstanceTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.GoogleComputeInstanceTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.GoogleComputeInstanceTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeInstanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList">GoogleComputeInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAccelerator">GuestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList">GoogleComputeInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataFingerprint">MetadataFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList">GoogleComputeInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference">GoogleComputeInstanceTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference">GoogleComputeInstanceTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLinkUnique">SelfLinkUnique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference">GoogleComputeInstanceTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsFingerprint">TagsFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference">GoogleComputeInstanceTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeaturesInput">AdvancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForwardInput">CanIpForwardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfigInput">ConfidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.diskInput">DiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplayInput">EnableDisplayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAcceleratorInput">GuestAcceleratorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescriptionInput">InstanceDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionTypeInput">KeyRevocationActionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScriptInput">MetadataStartupScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfigInput">NetworkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadataInput">PartnerMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplay">EnableDisplay</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescription">InstanceDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadata">PartnerMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeatures"></a>

```go
func AdvancedMachineFeatures() GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfig"></a>

```go
func ConfidentialInstanceConfig() GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.disk"></a>

```go
func Disk() GoogleComputeInstanceTemplateDiskList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList">GoogleComputeInstanceTemplateDiskList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GuestAccelerator`<sup>Required</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAccelerator"></a>

```go
func GuestAccelerator() GoogleComputeInstanceTemplateGuestAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList">GoogleComputeInstanceTemplateGuestAcceleratorList</a>

---

##### `MetadataFingerprint`<sup>Required</sup> <a name="MetadataFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataFingerprint"></a>

```go
func MetadataFingerprint() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterface"></a>

```go
func NetworkInterface() GoogleComputeInstanceTemplateNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList">GoogleComputeInstanceTemplateNetworkInterfaceList</a>

---

##### `NetworkPerformanceConfig`<sup>Required</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfig"></a>

```go
func NetworkPerformanceConfig() GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinity"></a>

```go
func ReservationAffinity() GoogleComputeInstanceTemplateReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference">GoogleComputeInstanceTemplateReservationAffinityOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.scheduling"></a>

```go
func Scheduling() GoogleComputeInstanceTemplateSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference">GoogleComputeInstanceTemplateSchedulingOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkUnique`<sup>Required</sup> <a name="SelfLinkUnique" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLinkUnique"></a>

```go
func SelfLinkUnique() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccount"></a>

```go
func ServiceAccount() GoogleComputeInstanceTemplateServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference">GoogleComputeInstanceTemplateServiceAccountOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfig"></a>

```go
func ShieldedInstanceConfig() GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference</a>

---

##### `TagsFingerprint`<sup>Required</sup> <a name="TagsFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsFingerprint"></a>

```go
func TagsFingerprint() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeouts"></a>

```go
func Timeouts() GoogleComputeInstanceTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference">GoogleComputeInstanceTemplateTimeoutsOutputReference</a>

---

##### `AdvancedMachineFeaturesInput`<sup>Optional</sup> <a name="AdvancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeaturesInput"></a>

```go
func AdvancedMachineFeaturesInput() GoogleComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---

##### `CanIpForwardInput`<sup>Optional</sup> <a name="CanIpForwardInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForwardInput"></a>

```go
func CanIpForwardInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialInstanceConfigInput`<sup>Optional</sup> <a name="ConfidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfigInput"></a>

```go
func ConfidentialInstanceConfigInput() GoogleComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.diskInput"></a>

```go
func DiskInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDisplayInput`<sup>Optional</sup> <a name="EnableDisplayInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplayInput"></a>

```go
func EnableDisplayInput() interface{}
```

- *Type:* interface{}

---

##### `GuestAcceleratorInput`<sup>Optional</sup> <a name="GuestAcceleratorInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAcceleratorInput"></a>

```go
func GuestAcceleratorInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceDescriptionInput`<sup>Optional</sup> <a name="InstanceDescriptionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescriptionInput"></a>

```go
func InstanceDescriptionInput() *string
```

- *Type:* *string

---

##### `KeyRevocationActionTypeInput`<sup>Optional</sup> <a name="KeyRevocationActionTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionTypeInput"></a>

```go
func KeyRevocationActionTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataStartupScriptInput`<sup>Optional</sup> <a name="MetadataStartupScriptInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScriptInput"></a>

```go
func MetadataStartupScriptInput() *string
```

- *Type:* *string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatformInput"></a>

```go
func MinCpuPlatformInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkPerformanceConfigInput`<sup>Optional</sup> <a name="NetworkPerformanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfigInput"></a>

```go
func NetworkPerformanceConfigInput() GoogleComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---

##### `PartnerMetadataInput`<sup>Optional</sup> <a name="PartnerMetadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadataInput"></a>

```go
func PartnerMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinityInput"></a>

```go
func ReservationAffinityInput() GoogleComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePoliciesInput"></a>

```go
func ResourcePoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.schedulingInput"></a>

```go
func SchedulingInput() GoogleComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() GoogleComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfigInput"></a>

```go
func ShieldedInstanceConfigInput() GoogleComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForward"></a>

```go
func CanIpForward() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableDisplay`<sup>Required</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplay"></a>

```go
func EnableDisplay() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceDescription`<sup>Required</sup> <a name="InstanceDescription" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescription"></a>

```go
func InstanceDescription() *string
```

- *Type:* *string

---

##### `KeyRevocationActionType`<sup>Required</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionType"></a>

```go
func KeyRevocationActionType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataStartupScript`<sup>Required</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScript"></a>

```go
func MetadataStartupScript() *string
```

- *Type:* *string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatform"></a>

```go
func MinCpuPlatform() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `PartnerMetadata`<sup>Required</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadata"></a>

```go
func PartnerMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePolicies"></a>

```go
func ResourcePolicies() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceTemplateAdvancedMachineFeatures <a name="GoogleComputeInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>interface{}</code> | Whether to enable UEFI networking or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>*string</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode">TurboMode</a></code> | <code>*string</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>*f64</code> | The number of physical cores to expose to an instance. |

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```go
EnableNestedVirtualization interface{}
```

- *Type:* interface{}

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#enable_nested_virtualization GoogleComputeInstanceTemplate#enable_nested_virtualization}

---

##### `EnableUefiNetworking`<sup>Optional</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```go
EnableUefiNetworking interface{}
```

- *Type:* interface{}

Whether to enable UEFI networking or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#enable_uefi_networking GoogleComputeInstanceTemplate#enable_uefi_networking}

---

##### `PerformanceMonitoringUnit`<sup>Optional</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```go
PerformanceMonitoringUnit *string
```

- *Type:* *string

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#performance_monitoring_unit GoogleComputeInstanceTemplate#performance_monitoring_unit}

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```go
ThreadsPerCore *f64
```

- *Type:* *f64

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#threads_per_core GoogleComputeInstanceTemplate#threads_per_core}

---

##### `TurboMode`<sup>Optional</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode"></a>

```go
TurboMode *string
```

- *Type:* *string

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#turbo_mode GoogleComputeInstanceTemplate#turbo_mode}

---

##### `VisibleCoreCount`<sup>Optional</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```go
VisibleCoreCount *f64
```

- *Type:* *f64

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#visible_core_count GoogleComputeInstanceTemplate#visible_core_count}

---

### GoogleComputeInstanceTemplateConfidentialInstanceConfig <a name="GoogleComputeInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig {
	ConfidentialInstanceType: *string,
	EnableConfidentialCompute: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>*string</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `ConfidentialInstanceType`<sup>Optional</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```go
ConfidentialInstanceType *string
```

- *Type:* *string

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#confidential_instance_type GoogleComputeInstanceTemplate#confidential_instance_type}

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```go
EnableConfidentialCompute interface{}
```

- *Type:* interface{}

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#enable_confidential_compute GoogleComputeInstanceTemplate#enable_confidential_compute}

---

### GoogleComputeInstanceTemplateConfig <a name="GoogleComputeInstanceTemplateConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Disk: interface{},
	MachineType: *string,
	AdvancedMachineFeatures: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures,
	CanIpForward: interface{},
	ConfidentialInstanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig,
	Description: *string,
	EnableDisplay: interface{},
	GuestAccelerator: interface{},
	Id: *string,
	InstanceDescription: *string,
	KeyRevocationActionType: *string,
	Labels: *map[string]*string,
	Metadata: *map[string]*string,
	MetadataStartupScript: *string,
	MinCpuPlatform: *string,
	Name: *string,
	NamePrefix: *string,
	NetworkInterface: interface{},
	NetworkPerformanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig,
	PartnerMetadata: *map[string]*string,
	Project: *string,
	Region: *string,
	ReservationAffinity: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity,
	ResourceManagerTags: *map[string]*string,
	ResourcePolicies: *[]*string,
	Scheduling: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling,
	ServiceAccount: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount,
	ShieldedInstanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.disk">Disk</a></code> | <code>interface{}</code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.description">Description</a></code> | <code>*string</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.enableDisplay">EnableDisplay</a></code> | <code>interface{}</code> | Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.guestAccelerator">GuestAccelerator</a></code> | <code>interface{}</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#id GoogleComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.instanceDescription">InstanceDescription</a></code> | <code>*string</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>*string</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>*string</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.partnerMetadata">PartnerMetadata</a></code> | <code>*map[string]*string</code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.region">Region</a></code> | <code>*string</code> | An instance template is a global resource that is not bound to a zone or a region. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.disk"></a>

```go
Disk interface{}
```

- *Type:* interface{}

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#disk GoogleComputeInstanceTemplate#disk}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#machine_type GoogleComputeInstanceTemplate#machine_type}

---

##### `AdvancedMachineFeatures`<sup>Optional</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.advancedMachineFeatures"></a>

```go
AdvancedMachineFeatures GoogleComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#advanced_machine_features GoogleComputeInstanceTemplate#advanced_machine_features}

---

##### `CanIpForward`<sup>Optional</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.canIpForward"></a>

```go
CanIpForward interface{}
```

- *Type:* interface{}

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#can_ip_forward GoogleComputeInstanceTemplate#can_ip_forward}

---

##### `ConfidentialInstanceConfig`<sup>Optional</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.confidentialInstanceConfig"></a>

```go
ConfidentialInstanceConfig GoogleComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#confidential_instance_config GoogleComputeInstanceTemplate#confidential_instance_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#description GoogleComputeInstanceTemplate#description}

---

##### `EnableDisplay`<sup>Optional</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.enableDisplay"></a>

```go
EnableDisplay interface{}
```

- *Type:* interface{}

Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#enable_display GoogleComputeInstanceTemplate#enable_display}

---

##### `GuestAccelerator`<sup>Optional</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.guestAccelerator"></a>

```go
GuestAccelerator interface{}
```

- *Type:* interface{}

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#guest_accelerator GoogleComputeInstanceTemplate#guest_accelerator}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#id GoogleComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceDescription`<sup>Optional</sup> <a name="InstanceDescription" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.instanceDescription"></a>

```go
InstanceDescription *string
```

- *Type:* *string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#instance_description GoogleComputeInstanceTemplate#instance_description}

---

##### `KeyRevocationActionType`<sup>Optional</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.keyRevocationActionType"></a>

```go
KeyRevocationActionType *string
```

- *Type:* *string

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#key_revocation_action_type GoogleComputeInstanceTemplate#key_revocation_action_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to instances created from this template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#labels GoogleComputeInstanceTemplate#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#metadata GoogleComputeInstanceTemplate#metadata}

---

##### `MetadataStartupScript`<sup>Optional</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadataStartupScript"></a>

```go
MetadataStartupScript *string
```

- *Type:* *string

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#metadata_startup_script GoogleComputeInstanceTemplate#metadata_startup_script}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.minCpuPlatform"></a>

```go
MinCpuPlatform *string
```

- *Type:* *string

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#min_cpu_platform GoogleComputeInstanceTemplate#min_cpu_platform}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#name GoogleComputeInstanceTemplate#name}

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Creates a unique name beginning with the specified prefix.

Conflicts with name. Max length is 54 characters. Prefixes with lengths longer than 37 characters will use a shortened UUID that will be more prone to collisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#name_prefix GoogleComputeInstanceTemplate#name_prefix}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#network_interface GoogleComputeInstanceTemplate#network_interface}

---

##### `NetworkPerformanceConfig`<sup>Optional</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkPerformanceConfig"></a>

```go
NetworkPerformanceConfig GoogleComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#network_performance_config GoogleComputeInstanceTemplate#network_performance_config}

---

##### `PartnerMetadata`<sup>Optional</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.partnerMetadata"></a>

```go
PartnerMetadata *map[string]*string
```

- *Type:* *map[string]*string

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#partner_metadata GoogleComputeInstanceTemplate#partner_metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#project GoogleComputeInstanceTemplate#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

An instance template is a global resource that is not bound to a zone or a region.

However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#region GoogleComputeInstanceTemplate#region}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.reservationAffinity"></a>

```go
ReservationAffinity GoogleComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#reservation_affinity GoogleComputeInstanceTemplate#reservation_affinity}

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#resource_manager_tags GoogleComputeInstanceTemplate#resource_manager_tags}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourcePolicies"></a>

```go
ResourcePolicies *[]*string
```

- *Type:* *[]*string

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#resource_policies GoogleComputeInstanceTemplate#resource_policies}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.scheduling"></a>

```go
Scheduling GoogleComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#scheduling GoogleComputeInstanceTemplate#scheduling}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.serviceAccount"></a>

```go
ServiceAccount GoogleComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#service_account GoogleComputeInstanceTemplate#service_account}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.shieldedInstanceConfig"></a>

```go
ShieldedInstanceConfig GoogleComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#shielded_instance_config GoogleComputeInstanceTemplate#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#tags GoogleComputeInstanceTemplate#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeInstanceTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#timeouts GoogleComputeInstanceTemplate#timeouts}

---

### GoogleComputeInstanceTemplateDisk <a name="GoogleComputeInstanceTemplateDisk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateDisk {
	AutoDelete: interface{},
	Boot: interface{},
	DeviceName: *string,
	DiskEncryptionKey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey,
	DiskName: *string,
	DiskSizeGb: *f64,
	DiskType: *string,
	Interface: *string,
	Labels: *map[string]*string,
	Mode: *string,
	ProvisionedIops: *f64,
	ProvisionedThroughput: *f64,
	ResourceManagerTags: *map[string]*string,
	ResourcePolicies: *[]*string,
	Source: *string,
	SourceImage: *string,
	SourceImageEncryptionKey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey,
	SourceSnapshot: *string,
	SourceSnapshotEncryptionKey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.autoDelete">AutoDelete</a></code> | <code>interface{}</code> | Whether or not the disk should be auto-deleted. This defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.boot">Boot</a></code> | <code>interface{}</code> | Indicates that this is a boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.deviceName">DeviceName</a></code> | <code>*string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskName">DiskName</a></code> | <code>*string</code> | Name of the disk. When not provided, this defaults to the name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskType">DiskType</a></code> | <code>*string</code> | The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.interface">Interface</a></code> | <code>*string</code> | Specifies the disk interface to use for attaching this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to disks,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.mode">Mode</a></code> | <code>*string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedIops">ProvisionedIops</a></code> | <code>*f64</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>*f64</code> | Indicates how much throughput to provision for the disk, in MB/s. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | A list (short name or id) of resource policies to attach to this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.source">Source</a></code> | <code>*string</code> | The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImage">SourceImage</a></code> | <code>*string</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | The source snapshot to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.type">Type</a></code> | <code>*string</code> | The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". |

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.autoDelete"></a>

```go
AutoDelete interface{}
```

- *Type:* interface{}

Whether or not the disk should be auto-deleted. This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#auto_delete GoogleComputeInstanceTemplate#auto_delete}

---

##### `Boot`<sup>Optional</sup> <a name="Boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.boot"></a>

```go
Boot interface{}
```

- *Type:* interface{}

Indicates that this is a boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#boot GoogleComputeInstanceTemplate#boot}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

If not specified, the server chooses a default device name to apply to this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#device_name GoogleComputeInstanceTemplate#device_name}

---

##### `DiskEncryptionKey`<sup>Optional</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskEncryptionKey"></a>

```go
DiskEncryptionKey GoogleComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#disk_encryption_key GoogleComputeInstanceTemplate#disk_encryption_key}

---

##### `DiskName`<sup>Optional</sup> <a name="DiskName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskName"></a>

```go
DiskName *string
```

- *Type:* *string

Name of the disk. When not provided, this defaults to the name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#disk_name GoogleComputeInstanceTemplate#disk_name}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

The size of the image in gigabytes.

If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#disk_size_gb GoogleComputeInstanceTemplate#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#disk_type GoogleComputeInstanceTemplate#disk_type}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.interface"></a>

```go
Interface *string
```

- *Type:* *string

Specifies the disk interface to use for attaching this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#interface GoogleComputeInstanceTemplate#interface}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to disks,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#labels GoogleComputeInstanceTemplate#labels}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If you are attaching or creating a boot disk, this must read-write mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#mode GoogleComputeInstanceTemplate#mode}

---

##### `ProvisionedIops`<sup>Optional</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedIops"></a>

```go
ProvisionedIops *f64
```

- *Type:* *f64

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk) or the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks) depending on the selected disk_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#provisioned_iops GoogleComputeInstanceTemplate#provisioned_iops}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedThroughput"></a>

```go
ProvisionedThroughput *f64
```

- *Type:* *f64

Indicates how much throughput to provision for the disk, in MB/s.

This sets the amount of data that can be read or written from the disk per second. Values must greater than or equal to 1. For more details, see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#provisioned_throughput GoogleComputeInstanceTemplate#provisioned_throughput}

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#resource_manager_tags GoogleComputeInstanceTemplate#resource_manager_tags}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourcePolicies"></a>

```go
ResourcePolicies *[]*string
```

- *Type:* *[]*string

A list (short name or id) of resource policies to attach to this disk.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#resource_policies GoogleComputeInstanceTemplate#resource_policies}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.source"></a>

```go
Source *string
```

- *Type:* *string

The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach.

~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#source GoogleComputeInstanceTemplate#source}

---

##### `SourceImage`<sup>Optional</sup> <a name="SourceImage" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImage"></a>

```go
SourceImage *string
```

- *Type:* *string

The image from which to initialize this disk.

This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#source_image GoogleComputeInstanceTemplate#source_image}

---

##### `SourceImageEncryptionKey`<sup>Optional</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImageEncryptionKey"></a>

```go
SourceImageEncryptionKey GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#source_image_encryption_key GoogleComputeInstanceTemplate#source_image_encryption_key}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshot"></a>

```go
SourceSnapshot *string
```

- *Type:* *string

The source snapshot to create this disk.

When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#source_snapshot GoogleComputeInstanceTemplate#source_snapshot}

---

##### `SourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey"></a>

```go
SourceSnapshotEncryptionKey GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#source_snapshot_encryption_key GoogleComputeInstanceTemplate#source_snapshot_encryption_key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

### GoogleComputeInstanceTemplateDiskDiskEncryptionKey <a name="GoogleComputeInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey {
	KmsKeySelfLink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

### GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey <a name="GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#kms_key_service_account GoogleComputeInstanceTemplate#kms_key_service_account}

---

### GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#kms_key_service_account GoogleComputeInstanceTemplate#kms_key_service_account}

---

### GoogleComputeInstanceTemplateGuestAccelerator <a name="GoogleComputeInstanceTemplateGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateGuestAccelerator {
	Count: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.count">Count</a></code> | <code>*f64</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.type">Type</a></code> | <code>*string</code> | The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#count GoogleComputeInstanceTemplate#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.type"></a>

```go
Type *string
```

- *Type:* *string

The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

### GoogleComputeInstanceTemplateNetworkInterface <a name="GoogleComputeInstanceTemplateNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateNetworkInterface {
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
	StackType: *string,
	Subnetwork: *string,
	SubnetworkProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.accessConfig">AccessConfig</a></code> | <code>interface{}</code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.aliasIpRange">AliasIpRange</a></code> | <code>interface{}</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>*f64</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code>interface{}</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.network">Network</a></code> | <code>*string</code> | The name or self_link of the network to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkIp">NetworkIp</a></code> | <code>*string</code> | The private IP address to assign to the instance. If empty, the address will be automatically assigned. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.nicType">NicType</a></code> | <code>*string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.queueCount">QueueCount</a></code> | <code>*f64</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.stackType">StackType</a></code> | <code>*string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name of the subnetwork to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetworkProject">SubnetworkProject</a></code> | <code>*string</code> | The ID of the project in which the subnetwork belongs. |

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.accessConfig"></a>

```go
AccessConfig interface{}
```

- *Type:* interface{}

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#access_config GoogleComputeInstanceTemplate#access_config}

---

##### `AliasIpRange`<sup>Optional</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.aliasIpRange"></a>

```go
AliasIpRange interface{}
```

- *Type:* interface{}

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#alias_ip_range GoogleComputeInstanceTemplate#alias_ip_range}

---

##### `InternalIpv6PrefixLength`<sup>Optional</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```go
InternalIpv6PrefixLength *f64
```

- *Type:* *f64

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#internal_ipv6_prefix_length GoogleComputeInstanceTemplate#internal_ipv6_prefix_length}

---

##### `Ipv6AccessConfig`<sup>Optional</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```go
Ipv6AccessConfig interface{}
```

- *Type:* interface{}

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#ipv6_access_config GoogleComputeInstanceTemplate#ipv6_access_config}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#ipv6_address GoogleComputeInstanceTemplate#ipv6_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name or self_link of the network to attach this interface to.

Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#network GoogleComputeInstanceTemplate#network}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#network_attachment GoogleComputeInstanceTemplate#network_attachment}

---

##### `NetworkIp`<sup>Optional</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkIp"></a>

```go
NetworkIp *string
```

- *Type:* *string

The private IP address to assign to the instance. If empty, the address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#network_ip GoogleComputeInstanceTemplate#network_ip}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.nicType"></a>

```go
NicType *string
```

- *Type:* *string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#nic_type GoogleComputeInstanceTemplate#nic_type}

---

##### `QueueCount`<sup>Optional</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.queueCount"></a>

```go
QueueCount *f64
```

- *Type:* *f64

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#queue_count GoogleComputeInstanceTemplate#queue_count}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.stackType"></a>

```go
StackType *string
```

- *Type:* *string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#stack_type GoogleComputeInstanceTemplate#stack_type}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name of the subnetwork to attach this interface to.

The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#subnetwork GoogleComputeInstanceTemplate#subnetwork}

---

##### `SubnetworkProject`<sup>Optional</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetworkProject"></a>

```go
SubnetworkProject *string
```

- *Type:* *string

The ID of the project in which the subnetwork belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#subnetwork_project GoogleComputeInstanceTemplate#subnetwork_project}

---

### GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig <a name="GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig {
	NatIp: *string,
	NetworkTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp">NatIp</a></code> | <code>*string</code> | The IP address that will be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | The networking tier used for configuring this instance template. |

---

##### `NatIp`<sup>Optional</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```go
NatIp *string
```

- *Type:* *string

The IP address that will be 1:1 mapped to the instance's network ip.

If not given, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#nat_ip GoogleComputeInstanceTemplate#nat_ip}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

The networking tier used for configuring this instance template.

This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#network_tier GoogleComputeInstanceTemplate#network_tier}

---

### GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange <a name="GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange {
	IpCidrRange: *string,
	SubnetworkRangeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>*string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```go
IpCidrRange *string
```

- *Type:* *string

The IP CIDR range represented by this alias IP range.

This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#ip_cidr_range GoogleComputeInstanceTemplate#ip_cidr_range}

---

##### `SubnetworkRangeName`<sup>Optional</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```go
SubnetworkRangeName *string
```

- *Type:* *string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

If left unspecified, the primary range of the subnetwork will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#subnetwork_range_name GoogleComputeInstanceTemplate#subnetwork_range_name}

---

### GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig {
	NetworkTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#network_tier GoogleComputeInstanceTemplate#network_tier}

---

### GoogleComputeInstanceTemplateNetworkPerformanceConfig <a name="GoogleComputeInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig {
	TotalEgressBandwidthTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>*string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```go
TotalEgressBandwidthTier *string
```

- *Type:* *string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#total_egress_bandwidth_tier GoogleComputeInstanceTemplate#total_egress_bandwidth_tier}

---

### GoogleComputeInstanceTemplateReservationAffinity <a name="GoogleComputeInstanceTemplateReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateReservationAffinity {
	Type: *string,
	SpecificReservation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.type">Type</a></code> | <code>*string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

##### `SpecificReservation`<sup>Optional</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.specificReservation"></a>

```go
SpecificReservation GoogleComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#specific_reservation GoogleComputeInstanceTemplate#specific_reservation}

---

### GoogleComputeInstanceTemplateReservationAffinitySpecificReservation <a name="GoogleComputeInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.key">Key</a></code> | <code>*string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.values">Values</a></code> | <code>*[]*string</code> | Corresponds to the label values of a reservation resource. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.key"></a>

```go
Key *string
```

- *Type:* *string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}

---

### GoogleComputeInstanceTemplateScheduling <a name="GoogleComputeInstanceTemplateScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateScheduling {
	AutomaticRestart: interface{},
	AvailabilityDomain: *f64,
	HostErrorTimeoutSeconds: *f64,
	InstanceTerminationAction: *string,
	LocalSsdRecoveryTimeout: interface{},
	MaintenanceInterval: *string,
	MaxRunDuration: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration,
	MinNodeCpus: *f64,
	NodeAffinities: interface{},
	OnHostMaintenance: *string,
	OnInstanceStopAction: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction,
	Preemptible: interface{},
	ProvisioningModel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.automaticRestart">AutomaticRestart</a></code> | <code>interface{}</code> | Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*f64</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>*f64</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>*string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code>interface{}</code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>*string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.minNodeCpus">MinNodeCpus</a></code> | <code>*f64</code> | Minimum number of cpus for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.nodeAffinities">NodeAffinities</a></code> | <code>interface{}</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>*string</code> | Defines the maintenance behavior for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | Allows instance to be preempted. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.provisioningModel">ProvisioningModel</a></code> | <code>*string</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `AutomaticRestart`<sup>Optional</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.automaticRestart"></a>

```go
AutomaticRestart interface{}
```

- *Type:* interface{}

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#automatic_restart GoogleComputeInstanceTemplate#automatic_restart}

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.availabilityDomain"></a>

```go
AvailabilityDomain *f64
```

- *Type:* *f64

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#availability_domain GoogleComputeInstanceTemplate#availability_domain}

---

##### `HostErrorTimeoutSeconds`<sup>Optional</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.hostErrorTimeoutSeconds"></a>

```go
HostErrorTimeoutSeconds *f64
```

- *Type:* *f64

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#host_error_timeout_seconds GoogleComputeInstanceTemplate#host_error_timeout_seconds}

---

##### `InstanceTerminationAction`<sup>Optional</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.instanceTerminationAction"></a>

```go
InstanceTerminationAction *string
```

- *Type:* *string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#instance_termination_action GoogleComputeInstanceTemplate#instance_termination_action}

---

##### `LocalSsdRecoveryTimeout`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```go
LocalSsdRecoveryTimeout interface{}
```

- *Type:* interface{}

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#local_ssd_recovery_timeout GoogleComputeInstanceTemplate#local_ssd_recovery_timeout}

---

##### `MaintenanceInterval`<sup>Optional</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maintenanceInterval"></a>

```go
MaintenanceInterval *string
```

- *Type:* *string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#maintenance_interval GoogleComputeInstanceTemplate#maintenance_interval}

---

##### `MaxRunDuration`<sup>Optional</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maxRunDuration"></a>

```go
MaxRunDuration GoogleComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#max_run_duration GoogleComputeInstanceTemplate#max_run_duration}

---

##### `MinNodeCpus`<sup>Optional</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.minNodeCpus"></a>

```go
MinNodeCpus *f64
```

- *Type:* *f64

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#min_node_cpus GoogleComputeInstanceTemplate#min_node_cpus}

---

##### `NodeAffinities`<sup>Optional</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.nodeAffinities"></a>

```go
NodeAffinities interface{}
```

- *Type:* interface{}

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#node_affinities GoogleComputeInstanceTemplate#node_affinities}

---

##### `OnHostMaintenance`<sup>Optional</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onHostMaintenance"></a>

```go
OnHostMaintenance *string
```

- *Type:* *string

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#on_host_maintenance GoogleComputeInstanceTemplate#on_host_maintenance}

---

##### `OnInstanceStopAction`<sup>Optional</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onInstanceStopAction"></a>

```go
OnInstanceStopAction GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#on_instance_stop_action GoogleComputeInstanceTemplate#on_instance_stop_action}

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.preemptible"></a>

```go
Preemptible interface{}
```

- *Type:* interface{}

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#preemptible GoogleComputeInstanceTemplate#preemptible}

---

##### `ProvisioningModel`<sup>Optional</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.provisioningModel"></a>

```go
ProvisioningModel *string
```

- *Type:* *string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#provisioning_model GoogleComputeInstanceTemplate#provisioning_model}

---

### GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#seconds GoogleComputeInstanceTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#nanos GoogleComputeInstanceTemplate#nanos}

---

### GoogleComputeInstanceTemplateSchedulingMaxRunDuration <a name="GoogleComputeInstanceTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#seconds GoogleComputeInstanceTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#nanos GoogleComputeInstanceTemplate#nanos}

---

### GoogleComputeInstanceTemplateSchedulingNodeAffinities <a name="GoogleComputeInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#operator GoogleComputeInstanceTemplate#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#operator GoogleComputeInstanceTemplate#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}.

---

### GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction <a name="GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction {
	DiscardLocalSsd: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>interface{}</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `DiscardLocalSsd`<sup>Optional</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```go
DiscardLocalSsd interface{}
```

- *Type:* interface{}

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#discard_local_ssd GoogleComputeInstanceTemplate#discard_local_ssd}

---

### GoogleComputeInstanceTemplateServiceAccount <a name="GoogleComputeInstanceTemplateServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateServiceAccount {
	Scopes: *[]*string,
	Email: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.scopes">Scopes</a></code> | <code>*[]*string</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.email">Email</a></code> | <code>*string</code> | The service account e-mail address. If not given, the default Google Compute Engine service account is used. |

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#scopes GoogleComputeInstanceTemplate#scopes}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.email"></a>

```go
Email *string
```

- *Type:* *string

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#email GoogleComputeInstanceTemplate#email}

---

### GoogleComputeInstanceTemplateShieldedInstanceConfig <a name="GoogleComputeInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig {
	EnableIntegrityMonitoring: interface{},
	EnableSecureBoot: interface{},
	EnableVtpm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | Verify the digital signature of all boot components, and halt the boot process if signature verification fails. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```go
EnableIntegrityMonitoring interface{}
```

- *Type:* interface{}

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#enable_integrity_monitoring GoogleComputeInstanceTemplate#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```go
EnableSecureBoot interface{}
```

- *Type:* interface{}

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#enable_secure_boot GoogleComputeInstanceTemplate#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```go
EnableVtpm interface{}
```

- *Type:* interface{}

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#enable_vtpm GoogleComputeInstanceTemplate#enable_vtpm}

---

### GoogleComputeInstanceTemplateTimeouts <a name="GoogleComputeInstanceTemplateTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

&googlecomputeinstancetemplate.GoogleComputeInstanceTemplateTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#create GoogleComputeInstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#delete GoogleComputeInstanceTemplate#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#create GoogleComputeInstanceTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_instance_template#delete GoogleComputeInstanceTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">ResetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">ResetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode">ResetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">ResetVisibleCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```go
func ResetEnableNestedVirtualization()
```

##### `ResetEnableUefiNetworking` <a name="ResetEnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```go
func ResetEnableUefiNetworking()
```

##### `ResetPerformanceMonitoringUnit` <a name="ResetPerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```go
func ResetPerformanceMonitoringUnit()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```go
func ResetThreadsPerCore()
```

##### `ResetTurboMode` <a name="ResetTurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```go
func ResetTurboMode()
```

##### `ResetVisibleCoreCount` <a name="ResetVisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```go
func ResetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">EnableUefiNetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">PerformanceMonitoringUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput">TurboModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">VisibleCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">TurboMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```go
func EnableNestedVirtualizationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableUefiNetworkingInput`<sup>Optional</sup> <a name="EnableUefiNetworkingInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```go
func EnableUefiNetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `PerformanceMonitoringUnitInput`<sup>Optional</sup> <a name="PerformanceMonitoringUnitInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```go
func PerformanceMonitoringUnitInput() *string
```

- *Type:* *string

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```go
func ThreadsPerCoreInput() *f64
```

- *Type:* *f64

---

##### `TurboModeInput`<sup>Optional</sup> <a name="TurboModeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```go
func TurboModeInput() *string
```

- *Type:* *string

---

##### `VisibleCoreCountInput`<sup>Optional</sup> <a name="VisibleCoreCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```go
func VisibleCoreCountInput() *f64
```

- *Type:* *f64

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```go
func EnableNestedVirtualization() interface{}
```

- *Type:* interface{}

---

##### `EnableUefiNetworking`<sup>Required</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```go
func EnableUefiNetworking() interface{}
```

- *Type:* interface{}

---

##### `PerformanceMonitoringUnit`<sup>Required</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```go
func PerformanceMonitoringUnit() *string
```

- *Type:* *string

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `TurboMode`<sup>Required</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```go
func TurboMode() *string
```

- *Type:* *string

---

##### `VisibleCoreCount`<sup>Required</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```go
func VisibleCoreCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---


### GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference <a name="GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">ResetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidentialInstanceType` <a name="ResetConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```go
func ResetConfidentialInstanceType()
```

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```go
func ResetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">ConfidentialInstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidentialInstanceTypeInput`<sup>Optional</sup> <a name="ConfidentialInstanceTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```go
func ConfidentialInstanceTypeInput() *string
```

- *Type:* *string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```go
func EnableConfidentialComputeInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialInstanceType`<sup>Required</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```go
func ConfidentialInstanceType() *string
```

- *Type:* *string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```go
func EnableConfidentialCompute() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---


### GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---


### GoogleComputeInstanceTemplateDiskList <a name="GoogleComputeInstanceTemplateDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceTemplateDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceTemplateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateDiskOutputReference <a name="GoogleComputeInstanceTemplateDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceTemplateDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey">PutDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey">PutSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey">PutSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetBoot">ResetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey">ResetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskName">ResetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedIops">ResetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImage">ResetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey">ResetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey">ResetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskEncryptionKey` <a name="PutDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey"></a>

```go
func PutDiskEncryptionKey(value GoogleComputeInstanceTemplateDiskDiskEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `PutSourceImageEncryptionKey` <a name="PutSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey"></a>

```go
func PutSourceImageEncryptionKey(value GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `PutSourceSnapshotEncryptionKey` <a name="PutSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey"></a>

```go
func PutSourceSnapshotEncryptionKey(value GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetAutoDelete"></a>

```go
func ResetAutoDelete()
```

##### `ResetBoot` <a name="ResetBoot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetBoot"></a>

```go
func ResetBoot()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetDiskEncryptionKey` <a name="ResetDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey"></a>

```go
func ResetDiskEncryptionKey()
```

##### `ResetDiskName` <a name="ResetDiskName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskName"></a>

```go
func ResetDiskName()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetInterface"></a>

```go
func ResetInterface()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetProvisionedIops` <a name="ResetProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedIops"></a>

```go
func ResetProvisionedIops()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput"></a>

```go
func ResetProvisionedThroughput()
```

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourcePolicies"></a>

```go
func ResetResourcePolicies()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSourceImage` <a name="ResetSourceImage" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImage"></a>

```go
func ResetSourceImage()
```

##### `ResetSourceImageEncryptionKey` <a name="ResetSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey"></a>

```go
func ResetSourceImageEncryptionKey()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot"></a>

```go
func ResetSourceSnapshot()
```

##### `ResetSourceSnapshotEncryptionKey` <a name="ResetSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey"></a>

```go
func ResetSourceSnapshotEncryptionKey()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.bootInput">BootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput">DiskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskNameInput">DiskNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput">ProvisionedIopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput">SourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageInput">SourceImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput">SourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.boot">Boot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskName">DiskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops">ProvisionedIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage">SourceImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskEncryptionKey`<sup>Required</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```go
func DiskEncryptionKey() GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a>

---

##### `SourceImageEncryptionKey`<sup>Required</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```go
func SourceImageEncryptionKey() GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `SourceSnapshotEncryptionKey`<sup>Required</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```go
func SourceSnapshotEncryptionKey() GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput"></a>

```go
func AutoDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `BootInput`<sup>Optional</sup> <a name="BootInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.bootInput"></a>

```go
func BootInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionKeyInput`<sup>Optional</sup> <a name="DiskEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput"></a>

```go
func DiskEncryptionKeyInput() GoogleComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `DiskNameInput`<sup>Optional</sup> <a name="DiskNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskNameInput"></a>

```go
func DiskNameInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interfaceInput"></a>

```go
func InterfaceInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ProvisionedIopsInput`<sup>Optional</sup> <a name="ProvisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput"></a>

```go
func ProvisionedIopsInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput"></a>

```go
func ProvisionedThroughputInput() *f64
```

- *Type:* *f64

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput"></a>

```go
func ResourcePoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="SourceImageEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput"></a>

```go
func SourceImageEncryptionKeyInput() GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `SourceImageInput`<sup>Optional</sup> <a name="SourceImageInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageInput"></a>

```go
func SourceImageInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `SourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```go
func SourceSnapshotEncryptionKeyInput() GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput"></a>

```go
func SourceSnapshotInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```go
func AutoDelete() interface{}
```

- *Type:* interface{}

---

##### `Boot`<sup>Required</sup> <a name="Boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.boot"></a>

```go
func Boot() interface{}
```

- *Type:* interface{}

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskName"></a>

```go
func DiskName() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```go
func ProvisionedIops() *f64
```

- *Type:* *f64

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```go
func ResourcePolicies() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceImage`<sup>Required</sup> <a name="SourceImage" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```go
func SourceImage() *string
```

- *Type:* *string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```go
func SourceSnapshot() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### GoogleComputeInstanceTemplateGuestAcceleratorList <a name="GoogleComputeInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateGuestAcceleratorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceTemplateGuestAcceleratorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateGuestAcceleratorOutputReference <a name="GoogleComputeInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateGuestAcceleratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceTemplateGuestAcceleratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList <a name="GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">ResetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNatIp` <a name="ResetNatIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```go
func ResetNatIp()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```go
func ResetNetworkTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">NatIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">NatIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```go
func PublicPtrDomainName() *string
```

- *Type:* *string

---

##### `NatIpInput`<sup>Optional</sup> <a name="NatIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```go
func NatIpInput() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `NatIp`<sup>Required</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```go
func NatIp() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">ResetSubnetworkRangeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetworkRangeName` <a name="ResetSubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```go
func ResetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">SubnetworkRangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```go
func IpCidrRangeInput() *string
```

- *Type:* *string

---

##### `SubnetworkRangeNameInput`<sup>Optional</sup> <a name="SubnetworkRangeNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```go
func SubnetworkRangeNameInput() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `SubnetworkRangeName`<sup>Required</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```go
func SubnetworkRangeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">ExternalIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIpv6`<sup>Required</sup> <a name="ExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```go
func ExternalIpv6() *string
```

- *Type:* *string

---

##### `ExternalIpv6PrefixLength`<sup>Required</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```go
func ExternalIpv6PrefixLength() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```go
func PublicPtrDomainName() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateNetworkInterfaceList <a name="GoogleComputeInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceTemplateNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateNetworkInterfaceOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceTemplateNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange">PutAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">PutIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange">ResetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">ResetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">ResetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp">ResetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount">ResetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">ResetSubnetworkProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```go
func PutAccessConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAliasIpRange` <a name="PutAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```go
func PutAliasIpRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIpv6AccessConfig` <a name="PutIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```go
func PutIpv6AccessConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```go
func ResetAccessConfig()
```

##### `ResetAliasIpRange` <a name="ResetAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```go
func ResetAliasIpRange()
```

##### `ResetInternalIpv6PrefixLength` <a name="ResetInternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```go
func ResetInternalIpv6PrefixLength()
```

##### `ResetIpv6AccessConfig` <a name="ResetIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```go
func ResetIpv6AccessConfig()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```

##### `ResetNetworkIp` <a name="ResetNetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```go
func ResetNetworkIp()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```go
func ResetNicType()
```

##### `ResetQueueCount` <a name="ResetQueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```go
func ResetQueueCount()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```go
func ResetStackType()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetSubnetworkProject` <a name="ResetSubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```go
func ResetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">AliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">AliasIpRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">InternalIpv6PrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">Ipv6AccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput">NetworkIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput">QueueCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput">StackTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">SubnetworkProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">NetworkIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType">NicType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">QueueCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType">StackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">SubnetworkProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```go
func AccessConfig() GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `AliasIpRange`<sup>Required</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```go
func AliasIpRange() GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `Ipv6AccessConfig`<sup>Required</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```go
func Ipv6AccessConfig() GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```go
func Ipv6AccessType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```go
func AccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AliasIpRangeInput`<sup>Optional</sup> <a name="AliasIpRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```go
func AliasIpRangeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="InternalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```go
func InternalIpv6PrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `Ipv6AccessConfigInput`<sup>Optional</sup> <a name="Ipv6AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```go
func Ipv6AccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NetworkIpInput`<sup>Optional</sup> <a name="NetworkIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```go
func NetworkIpInput() *string
```

- *Type:* *string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```go
func NicTypeInput() *string
```

- *Type:* *string

---

##### `QueueCountInput`<sup>Optional</sup> <a name="QueueCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```go
func QueueCountInput() *f64
```

- *Type:* *f64

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```go
func StackTypeInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkProjectInput`<sup>Optional</sup> <a name="SubnetworkProjectInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```go
func SubnetworkProjectInput() *string
```

- *Type:* *string

---

##### `InternalIpv6PrefixLength`<sup>Required</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```go
func InternalIpv6PrefixLength() *f64
```

- *Type:* *f64

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `NetworkIp`<sup>Required</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```go
func NetworkIp() *string
```

- *Type:* *string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```go
func NicType() *string
```

- *Type:* *string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```go
func QueueCount() *f64
```

- *Type:* *f64

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```go
func StackType() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `SubnetworkProject`<sup>Required</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```go
func SubnetworkProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference <a name="GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">TotalEgressBandwidthTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalEgressBandwidthTierInput`<sup>Optional</sup> <a name="TotalEgressBandwidthTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```go
func TotalEgressBandwidthTierInput() *string
```

- *Type:* *string

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```go
func TotalEgressBandwidthTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---


### GoogleComputeInstanceTemplateReservationAffinityOutputReference <a name="GoogleComputeInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateReservationAffinityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateReservationAffinityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation">ResetSpecificReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```go
func PutSpecificReservation(value GoogleComputeInstanceTemplateReservationAffinitySpecificReservation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `ResetSpecificReservation` <a name="ResetSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```go
func ResetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```go
func SpecificReservation() GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```go
func SpecificReservationInput() GoogleComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

---


### GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---


### GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

---


### GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList <a name="GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```go
func Get(index *f64) GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">ResetDiscardLocalSsd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiscardLocalSsd` <a name="ResetDiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```go
func ResetDiscardLocalSsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">DiscardLocalSsdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiscardLocalSsdInput`<sup>Optional</sup> <a name="DiscardLocalSsdInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```go
func DiscardLocalSsdInput() interface{}
```

- *Type:* interface{}

---

##### `DiscardLocalSsd`<sup>Required</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```go
func DiscardLocalSsd() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### GoogleComputeInstanceTemplateSchedulingOutputReference <a name="GoogleComputeInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateSchedulingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateSchedulingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">PutLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration">PutMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities">PutNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction">PutOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart">ResetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds">ResetHostErrorTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction">ResetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">ResetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval">ResetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration">ResetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus">ResetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities">ResetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance">ResetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction">ResetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel">ResetProvisioningModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalSsdRecoveryTimeout` <a name="PutLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```go
func PutLocalSsdRecoveryTimeout(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaxRunDuration` <a name="PutMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration"></a>

```go
func PutMaxRunDuration(value GoogleComputeInstanceTemplateSchedulingMaxRunDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `PutNodeAffinities` <a name="PutNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities"></a>

```go
func PutNodeAffinities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOnInstanceStopAction` <a name="PutOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction"></a>

```go
func PutOnInstanceStopAction(value GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `ResetAutomaticRestart` <a name="ResetAutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```go
func ResetAutomaticRestart()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetHostErrorTimeoutSeconds` <a name="ResetHostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```go
func ResetHostErrorTimeoutSeconds()
```

##### `ResetInstanceTerminationAction` <a name="ResetInstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```go
func ResetInstanceTerminationAction()
```

##### `ResetLocalSsdRecoveryTimeout` <a name="ResetLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```go
func ResetLocalSsdRecoveryTimeout()
```

##### `ResetMaintenanceInterval` <a name="ResetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval"></a>

```go
func ResetMaintenanceInterval()
```

##### `ResetMaxRunDuration` <a name="ResetMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration"></a>

```go
func ResetMaxRunDuration()
```

##### `ResetMinNodeCpus` <a name="ResetMinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```go
func ResetMinNodeCpus()
```

##### `ResetNodeAffinities` <a name="ResetNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```go
func ResetNodeAffinities()
```

##### `ResetOnHostMaintenance` <a name="ResetOnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```go
func ResetOnHostMaintenance()
```

##### `ResetOnInstanceStopAction` <a name="ResetOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction"></a>

```go
func ResetOnInstanceStopAction()
```

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetPreemptible"></a>

```go
func ResetPreemptible()
```

##### `ResetProvisioningModel` <a name="ResetProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```go
func ResetProvisioningModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities">NodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput">AutomaticRestartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">HostErrorTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput">InstanceTerminationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">LocalSsdRecoveryTimeoutInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput">MaintenanceIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput">MaxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput">MinNodeCpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput">NodeAffinitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput">OnHostMaintenanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput">OnInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput">ProvisioningModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart">AutomaticRestart</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus">MinNodeCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel">ProvisioningModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalSsdRecoveryTimeout`<sup>Required</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```go
func LocalSsdRecoveryTimeout() GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `MaxRunDuration`<sup>Required</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```go
func MaxRunDuration() GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a>

---

##### `NodeAffinities`<sup>Required</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```go
func NodeAffinities() GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `OnInstanceStopAction`<sup>Required</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```go
func OnInstanceStopAction() GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a>

---

##### `AutomaticRestartInput`<sup>Optional</sup> <a name="AutomaticRestartInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```go
func AutomaticRestartInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *f64
```

- *Type:* *f64

---

##### `HostErrorTimeoutSecondsInput`<sup>Optional</sup> <a name="HostErrorTimeoutSecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```go
func HostErrorTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `InstanceTerminationActionInput`<sup>Optional</sup> <a name="InstanceTerminationActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```go
func InstanceTerminationActionInput() *string
```

- *Type:* *string

---

##### `LocalSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeoutInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```go
func LocalSsdRecoveryTimeoutInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceIntervalInput`<sup>Optional</sup> <a name="MaintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```go
func MaintenanceIntervalInput() *string
```

- *Type:* *string

---

##### `MaxRunDurationInput`<sup>Optional</sup> <a name="MaxRunDurationInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput"></a>

```go
func MaxRunDurationInput() GoogleComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `MinNodeCpusInput`<sup>Optional</sup> <a name="MinNodeCpusInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```go
func MinNodeCpusInput() *f64
```

- *Type:* *f64

---

##### `NodeAffinitiesInput`<sup>Optional</sup> <a name="NodeAffinitiesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```go
func NodeAffinitiesInput() interface{}
```

- *Type:* interface{}

---

##### `OnHostMaintenanceInput`<sup>Optional</sup> <a name="OnHostMaintenanceInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```go
func OnHostMaintenanceInput() *string
```

- *Type:* *string

---

##### `OnInstanceStopActionInput`<sup>Optional</sup> <a name="OnInstanceStopActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```go
func OnInstanceStopActionInput() GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```go
func PreemptibleInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningModelInput`<sup>Optional</sup> <a name="ProvisioningModelInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```go
func ProvisioningModelInput() *string
```

- *Type:* *string

---

##### `AutomaticRestart`<sup>Required</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```go
func AutomaticRestart() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *f64
```

- *Type:* *f64

---

##### `HostErrorTimeoutSeconds`<sup>Required</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```go
func HostErrorTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InstanceTerminationAction`<sup>Required</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```go
func InstanceTerminationAction() *string
```

- *Type:* *string

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceInterval"></a>

```go
func MaintenanceInterval() *string
```

- *Type:* *string

---

##### `MinNodeCpus`<sup>Required</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```go
func MinNodeCpus() *f64
```

- *Type:* *f64

---

##### `OnHostMaintenance`<sup>Required</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```go
func OnHostMaintenance() *string
```

- *Type:* *string

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```go
func Preemptible() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningModel`<sup>Required</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```go
func ProvisioningModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

---


### GoogleComputeInstanceTemplateServiceAccountOutputReference <a name="GoogleComputeInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resetEmail"></a>

```go
func ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

---


### GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference <a name="GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```go
func ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```go
func ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```go
func ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```go
func EnableIntegrityMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```go
func EnableSecureBootInput() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```go
func EnableVtpmInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```go
func EnableIntegrityMonitoring() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```go
func EnableSecureBoot() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```go
func EnableVtpm() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---


### GoogleComputeInstanceTemplateTimeoutsOutputReference <a name="GoogleComputeInstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeinstancetemplate"

googlecomputeinstancetemplate.NewGoogleComputeInstanceTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInstanceTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



