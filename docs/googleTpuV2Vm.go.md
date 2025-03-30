# `googleTpuV2Vm` Submodule <a name="`googleTpuV2Vm` Submodule" id="@cdktf/provider-google-beta.googleTpuV2Vm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTpuV2Vm <a name="GoogleTpuV2Vm" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm google_tpu_v2_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2Vm(scope Construct, id *string, config GoogleTpuV2VmConfig) GoogleTpuV2Vm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig">GoogleTpuV2VmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig">GoogleTpuV2VmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig">PutAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putDataDisks">PutDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfigs">PutNetworkConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig">PutSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorConfig">ResetAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDataDisks">ResetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfigs">ResetNetworkConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetSchedulingConfig">ResetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAcceleratorConfig` <a name="PutAcceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig"></a>

```go
func PutAcceleratorConfig(value GoogleTpuV2VmAcceleratorConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

---

##### `PutDataDisks` <a name="PutDataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putDataDisks"></a>

```go
func PutDataDisks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putDataDisks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig"></a>

```go
func PutNetworkConfig(value GoogleTpuV2VmNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

---

##### `PutNetworkConfigs` <a name="PutNetworkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfigs"></a>

```go
func PutNetworkConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedulingConfig` <a name="PutSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig"></a>

```go
func PutSchedulingConfig(value GoogleTpuV2VmSchedulingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

---

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount"></a>

```go
func PutServiceAccount(value GoogleTpuV2VmServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putShieldedInstanceConfig"></a>

```go
func PutShieldedInstanceConfig(value GoogleTpuV2VmShieldedInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts"></a>

```go
func PutTimeouts(value GoogleTpuV2VmTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>

---

##### `ResetAcceleratorConfig` <a name="ResetAcceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorConfig"></a>

```go
func ResetAcceleratorConfig()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetCidrBlock"></a>

```go
func ResetCidrBlock()
```

##### `ResetDataDisks` <a name="ResetDataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDataDisks"></a>

```go
func ResetDataDisks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetNetworkConfigs` <a name="ResetNetworkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfigs"></a>

```go
func ResetNetworkConfigs()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSchedulingConfig` <a name="ResetSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetSchedulingConfig"></a>

```go
func ResetSchedulingConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetShieldedInstanceConfig"></a>

```go
func ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleTpuV2Vm resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.GoogleTpuV2Vm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.GoogleTpuV2Vm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.GoogleTpuV2Vm_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.GoogleTpuV2Vm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleTpuV2Vm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleTpuV2Vm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleTpuV2Vm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTpuV2Vm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference">GoogleTpuV2VmAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisks">DataDisks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList">GoogleTpuV2VmDataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.healthDescription">HealthDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.multisliceNode">MultisliceNode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference">GoogleTpuV2VmNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigs">NetworkConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList">GoogleTpuV2VmNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkEndpoints">NetworkEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList">GoogleTpuV2VmNetworkEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.queuedResource">QueuedResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference">GoogleTpuV2VmSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference">GoogleTpuV2VmServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference">GoogleTpuV2VmShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.symptoms">Symptoms</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList">GoogleTpuV2VmSymptomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference">GoogleTpuV2VmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfigInput">AcceleratorConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisksInput">DataDisksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigsInput">NetworkConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfigInput">SchedulingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcceleratorConfig`<sup>Required</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfig"></a>

```go
func AcceleratorConfig() GoogleTpuV2VmAcceleratorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference">GoogleTpuV2VmAcceleratorConfigOutputReference</a>

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `DataDisks`<sup>Required</sup> <a name="DataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisks"></a>

```go
func DataDisks() GoogleTpuV2VmDataDisksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList">GoogleTpuV2VmDataDisksList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `HealthDescription`<sup>Required</sup> <a name="HealthDescription" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.healthDescription"></a>

```go
func HealthDescription() *string
```

- *Type:* *string

---

##### `MultisliceNode`<sup>Required</sup> <a name="MultisliceNode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.multisliceNode"></a>

```go
func MultisliceNode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfig"></a>

```go
func NetworkConfig() GoogleTpuV2VmNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference">GoogleTpuV2VmNetworkConfigOutputReference</a>

---

##### `NetworkConfigs`<sup>Required</sup> <a name="NetworkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigs"></a>

```go
func NetworkConfigs() GoogleTpuV2VmNetworkConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList">GoogleTpuV2VmNetworkConfigsList</a>

---

##### `NetworkEndpoints`<sup>Required</sup> <a name="NetworkEndpoints" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkEndpoints"></a>

```go
func NetworkEndpoints() GoogleTpuV2VmNetworkEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList">GoogleTpuV2VmNetworkEndpointsList</a>

---

##### `QueuedResource`<sup>Required</sup> <a name="QueuedResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.queuedResource"></a>

```go
func QueuedResource() *string
```

- *Type:* *string

---

##### `SchedulingConfig`<sup>Required</sup> <a name="SchedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfig"></a>

```go
func SchedulingConfig() GoogleTpuV2VmSchedulingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference">GoogleTpuV2VmSchedulingConfigOutputReference</a>

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccount"></a>

```go
func ServiceAccount() GoogleTpuV2VmServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference">GoogleTpuV2VmServiceAccountOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfig"></a>

```go
func ShieldedInstanceConfig() GoogleTpuV2VmShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference">GoogleTpuV2VmShieldedInstanceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Symptoms`<sup>Required</sup> <a name="Symptoms" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.symptoms"></a>

```go
func Symptoms() GoogleTpuV2VmSymptomsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList">GoogleTpuV2VmSymptomsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeouts"></a>

```go
func Timeouts() GoogleTpuV2VmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference">GoogleTpuV2VmTimeoutsOutputReference</a>

---

##### `AcceleratorConfigInput`<sup>Optional</sup> <a name="AcceleratorConfigInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfigInput"></a>

```go
func AcceleratorConfigInput() GoogleTpuV2VmAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `DataDisksInput`<sup>Optional</sup> <a name="DataDisksInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisksInput"></a>

```go
func DataDisksInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigInput"></a>

```go
func NetworkConfigInput() GoogleTpuV2VmNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

---

##### `NetworkConfigsInput`<sup>Optional</sup> <a name="NetworkConfigsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigsInput"></a>

```go
func NetworkConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `SchedulingConfigInput`<sup>Optional</sup> <a name="SchedulingConfigInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfigInput"></a>

```go
func SchedulingConfigInput() GoogleTpuV2VmSchedulingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() GoogleTpuV2VmServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfigInput"></a>

```go
func ShieldedInstanceConfigInput() GoogleTpuV2VmShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTpuV2VmAcceleratorConfig <a name="GoogleTpuV2VmAcceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmAcceleratorConfig {
	Topology: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.topology">Topology</a></code> | <code>*string</code> | Topology of TPU in chips. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.type">Type</a></code> | <code>*string</code> | Type of TPU. Please select one of the allowed types: https://cloud.google.com/tpu/docs/reference/rest/v2/AcceleratorConfig#Type. |

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.topology"></a>

```go
Topology *string
```

- *Type:* *string

Topology of TPU in chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#topology GoogleTpuV2Vm#topology}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of TPU. Please select one of the allowed types: https://cloud.google.com/tpu/docs/reference/rest/v2/AcceleratorConfig#Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#type GoogleTpuV2Vm#type}

---

### GoogleTpuV2VmConfig <a name="GoogleTpuV2VmConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RuntimeVersion: *string,
	AcceleratorConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig,
	AcceleratorType: *string,
	CidrBlock: *string,
	DataDisks: interface{},
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Metadata: *map[string]*string,
	NetworkConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig,
	NetworkConfigs: interface{},
	Project: *string,
	SchedulingConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig,
	ServiceAccount: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount,
	ShieldedInstanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTpuV2Vm.GoogleTpuV2VmTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.name">Name</a></code> | <code>*string</code> | The immutable name of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | Runtime version for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | TPU accelerator type for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | The CIDR block that the TPU node will use when selecting an IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dataDisks">DataDisks</a></code> | <code>interface{}</code> | data_disks block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.description">Description</a></code> | <code>*string</code> | Text description of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#id GoogleTpuV2Vm#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfigs">NetworkConfigs</a></code> | <code>interface{}</code> | network_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#project GoogleTpuV2Vm#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | scheduling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.zone">Zone</a></code> | <code>*string</code> | The GCP location for the TPU. If it is not provided, the provider zone is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The immutable name of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#name GoogleTpuV2Vm#name}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

Runtime version for the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#runtime_version GoogleTpuV2Vm#runtime_version}

---

##### `AcceleratorConfig`<sup>Optional</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorConfig"></a>

```go
AcceleratorConfig GoogleTpuV2VmAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#accelerator_config GoogleTpuV2Vm#accelerator_config}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

TPU accelerator type for the TPU.

'accelerator_type' cannot be used at the same time as
'accelerator_config'. If neither is specified, 'accelerator_type' defaults to 'v2-8'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#accelerator_type GoogleTpuV2Vm#accelerator_type}

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

The CIDR block that the TPU node will use when selecting an IP address.

This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#cidr_block GoogleTpuV2Vm#cidr_block}

---

##### `DataDisks`<sup>Optional</sup> <a name="DataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dataDisks"></a>

```go
DataDisks interface{}
```

- *Type:* interface{}

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#data_disks GoogleTpuV2Vm#data_disks}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Text description of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#description GoogleTpuV2Vm#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#id GoogleTpuV2Vm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#labels GoogleTpuV2Vm#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#metadata GoogleTpuV2Vm#metadata}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfig"></a>

```go
NetworkConfig GoogleTpuV2VmNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#network_config GoogleTpuV2Vm#network_config}

---

##### `NetworkConfigs`<sup>Optional</sup> <a name="NetworkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfigs"></a>

```go
NetworkConfigs interface{}
```

- *Type:* interface{}

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#network_configs GoogleTpuV2Vm#network_configs}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#project GoogleTpuV2Vm#project}.

---

##### `SchedulingConfig`<sup>Optional</sup> <a name="SchedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.schedulingConfig"></a>

```go
SchedulingConfig GoogleTpuV2VmSchedulingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#scheduling_config GoogleTpuV2Vm#scheduling_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.serviceAccount"></a>

```go
ServiceAccount GoogleTpuV2VmServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#service_account GoogleTpuV2Vm#service_account}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.shieldedInstanceConfig"></a>

```go
ShieldedInstanceConfig GoogleTpuV2VmShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#shielded_instance_config GoogleTpuV2Vm#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#tags GoogleTpuV2Vm#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.timeouts"></a>

```go
Timeouts GoogleTpuV2VmTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#timeouts GoogleTpuV2Vm#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The GCP location for the TPU. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#zone GoogleTpuV2Vm#zone}

---

### GoogleTpuV2VmDataDisks <a name="GoogleTpuV2VmDataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmDataDisks {
	SourceDisk: *string,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.sourceDisk">SourceDisk</a></code> | <code>*string</code> | Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk". |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.mode">Mode</a></code> | <code>*string</code> | The mode in which to attach this disk. |

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.sourceDisk"></a>

```go
SourceDisk *string
```

- *Type:* *string

Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#source_disk GoogleTpuV2Vm#source_disk}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The mode in which to attach this disk.

If not specified, the default is READ_WRITE
mode. Only applicable to dataDisks. Default value: "READ_WRITE" Possible values: ["READ_WRITE", "READ_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#mode GoogleTpuV2Vm#mode}

---

### GoogleTpuV2VmNetworkConfig <a name="GoogleTpuV2VmNetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmNetworkConfig {
	CanIpForward: interface{},
	EnableExternalIps: interface{},
	Network: *string,
	QueueCount: *f64,
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | Allows the TPU node to send and receive packets with non-matching destination or source IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.enableExternalIps">EnableExternalIps</a></code> | <code>interface{}</code> | Indicates that external IP addresses would be associated with the TPU workers. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.network">Network</a></code> | <code>*string</code> | The name of the network for the TPU node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.queueCount">QueueCount</a></code> | <code>*f64</code> | Specifies networking queue count for TPU VM instance's network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name of the subnetwork for the TPU node. |

---

##### `CanIpForward`<sup>Optional</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.canIpForward"></a>

```go
CanIpForward interface{}
```

- *Type:* interface{}

Allows the TPU node to send and receive packets with non-matching destination or source IPs.

This is required if you plan to use the TPU workers to forward routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#can_ip_forward GoogleTpuV2Vm#can_ip_forward}

---

##### `EnableExternalIps`<sup>Optional</sup> <a name="EnableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.enableExternalIps"></a>

```go
EnableExternalIps interface{}
```

- *Type:* interface{}

Indicates that external IP addresses would be associated with the TPU workers.

If set to
false, the specified subnetwork or network should have Private Google Access enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#enable_external_ips GoogleTpuV2Vm#enable_external_ips}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the network for the TPU node.

It must be a preexisting Google Compute Engine
network. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#network GoogleTpuV2Vm#network}

---

##### `QueueCount`<sup>Optional</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.queueCount"></a>

```go
QueueCount *f64
```

- *Type:* *f64

Specifies networking queue count for TPU VM instance's network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#queue_count GoogleTpuV2Vm#queue_count}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name of the subnetwork for the TPU node.

It must be a preexisting Google Compute
Engine subnetwork. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#subnetwork GoogleTpuV2Vm#subnetwork}

---

### GoogleTpuV2VmNetworkConfigs <a name="GoogleTpuV2VmNetworkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmNetworkConfigs {
	CanIpForward: interface{},
	EnableExternalIps: interface{},
	Network: *string,
	QueueCount: *f64,
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | Allows the TPU node to send and receive packets with non-matching destination or source IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.enableExternalIps">EnableExternalIps</a></code> | <code>interface{}</code> | Indicates that external IP addresses would be associated with the TPU workers. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.network">Network</a></code> | <code>*string</code> | The name of the network for the TPU node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.queueCount">QueueCount</a></code> | <code>*f64</code> | Specifies networking queue count for TPU VM instance's network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name of the subnetwork for the TPU node. |

---

##### `CanIpForward`<sup>Optional</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.canIpForward"></a>

```go
CanIpForward interface{}
```

- *Type:* interface{}

Allows the TPU node to send and receive packets with non-matching destination or source IPs.

This is required if you plan to use the TPU workers to forward routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#can_ip_forward GoogleTpuV2Vm#can_ip_forward}

---

##### `EnableExternalIps`<sup>Optional</sup> <a name="EnableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.enableExternalIps"></a>

```go
EnableExternalIps interface{}
```

- *Type:* interface{}

Indicates that external IP addresses would be associated with the TPU workers.

If set to
false, the specified subnetwork or network should have Private Google Access enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#enable_external_ips GoogleTpuV2Vm#enable_external_ips}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the network for the TPU node.

It must be a preexisting Google Compute Engine
network. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#network GoogleTpuV2Vm#network}

---

##### `QueueCount`<sup>Optional</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.queueCount"></a>

```go
QueueCount *f64
```

- *Type:* *f64

Specifies networking queue count for TPU VM instance's network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#queue_count GoogleTpuV2Vm#queue_count}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name of the subnetwork for the TPU node.

It must be a preexisting Google Compute
Engine subnetwork. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#subnetwork GoogleTpuV2Vm#subnetwork}

---

### GoogleTpuV2VmNetworkEndpoints <a name="GoogleTpuV2VmNetworkEndpoints" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmNetworkEndpoints {

}
```


### GoogleTpuV2VmNetworkEndpointsAccessConfig <a name="GoogleTpuV2VmNetworkEndpointsAccessConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmNetworkEndpointsAccessConfig {

}
```


### GoogleTpuV2VmSchedulingConfig <a name="GoogleTpuV2VmSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmSchedulingConfig {
	Preemptible: interface{},
	Reserved: interface{},
	Spot: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | Defines whether the node is preemptible. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.reserved">Reserved</a></code> | <code>interface{}</code> | Whether the node is created under a reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.spot">Spot</a></code> | <code>interface{}</code> | Optional. Defines whether the node is Spot VM. |

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.preemptible"></a>

```go
Preemptible interface{}
```

- *Type:* interface{}

Defines whether the node is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#preemptible GoogleTpuV2Vm#preemptible}

---

##### `Reserved`<sup>Optional</sup> <a name="Reserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.reserved"></a>

```go
Reserved interface{}
```

- *Type:* interface{}

Whether the node is created under a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#reserved GoogleTpuV2Vm#reserved}

---

##### `Spot`<sup>Optional</sup> <a name="Spot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.spot"></a>

```go
Spot interface{}
```

- *Type:* interface{}

Optional. Defines whether the node is Spot VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#spot GoogleTpuV2Vm#spot}

---

### GoogleTpuV2VmServiceAccount <a name="GoogleTpuV2VmServiceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmServiceAccount {
	Email: *string,
	Scope: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.email">Email</a></code> | <code>*string</code> | Email address of the service account. If empty, default Compute service account will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.scope">Scope</a></code> | <code>*[]*string</code> | The list of scopes to be made available for this service account. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the service account. If empty, default Compute service account will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#email GoogleTpuV2Vm#email}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.scope"></a>

```go
Scope *[]*string
```

- *Type:* *[]*string

The list of scopes to be made available for this service account.

If empty, access to all
Cloud APIs will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#scope GoogleTpuV2Vm#scope}

---

### GoogleTpuV2VmShieldedInstanceConfig <a name="GoogleTpuV2VmShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmShieldedInstanceConfig {
	EnableSecureBoot: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | Defines whether the instance has Secure Boot enabled. |

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig.property.enableSecureBoot"></a>

```go
EnableSecureBoot interface{}
```

- *Type:* interface{}

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#enable_secure_boot GoogleTpuV2Vm#enable_secure_boot}

---

### GoogleTpuV2VmSymptoms <a name="GoogleTpuV2VmSymptoms" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmSymptoms {

}
```


### GoogleTpuV2VmTimeouts <a name="GoogleTpuV2VmTimeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

&googletpuv2vm.GoogleTpuV2VmTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#create GoogleTpuV2Vm#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#delete GoogleTpuV2Vm#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#update GoogleTpuV2Vm#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#create GoogleTpuV2Vm#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#delete GoogleTpuV2Vm#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_tpu_v2_vm#update GoogleTpuV2Vm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTpuV2VmAcceleratorConfigOutputReference <a name="GoogleTpuV2VmAcceleratorConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmAcceleratorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTpuV2VmAcceleratorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topologyInput">TopologyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topology">Topology</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopologyInput`<sup>Optional</sup> <a name="TopologyInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topologyInput"></a>

```go
func TopologyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topology"></a>

```go
func Topology() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuV2VmAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

---


### GoogleTpuV2VmDataDisksList <a name="GoogleTpuV2VmDataDisksList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmDataDisksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTpuV2VmDataDisksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.get"></a>

```go
func Get(index *f64) GoogleTpuV2VmDataDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTpuV2VmDataDisksOutputReference <a name="GoogleTpuV2VmDataDisksOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmDataDisksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTpuV2VmDataDisksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDiskInput">SourceDiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDisk">SourceDisk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `SourceDiskInput`<sup>Optional</sup> <a name="SourceDiskInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDiskInput"></a>

```go
func SourceDiskInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDisk"></a>

```go
func SourceDisk() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTpuV2VmNetworkConfigOutputReference <a name="GoogleTpuV2VmNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTpuV2VmNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetCanIpForward">ResetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetEnableExternalIps">ResetEnableExternalIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetQueueCount">ResetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCanIpForward` <a name="ResetCanIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetCanIpForward"></a>

```go
func ResetCanIpForward()
```

##### `ResetEnableExternalIps` <a name="ResetEnableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetEnableExternalIps"></a>

```go
func ResetEnableExternalIps()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetQueueCount` <a name="ResetQueueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetQueueCount"></a>

```go
func ResetQueueCount()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForwardInput">CanIpForwardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIpsInput">EnableExternalIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCountInput">QueueCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIps">EnableExternalIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCount">QueueCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanIpForwardInput`<sup>Optional</sup> <a name="CanIpForwardInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForwardInput"></a>

```go
func CanIpForwardInput() interface{}
```

- *Type:* interface{}

---

##### `EnableExternalIpsInput`<sup>Optional</sup> <a name="EnableExternalIpsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIpsInput"></a>

```go
func EnableExternalIpsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `QueueCountInput`<sup>Optional</sup> <a name="QueueCountInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCountInput"></a>

```go
func QueueCountInput() *f64
```

- *Type:* *f64

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForward"></a>

```go
func CanIpForward() interface{}
```

- *Type:* interface{}

---

##### `EnableExternalIps`<sup>Required</sup> <a name="EnableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIps"></a>

```go
func EnableExternalIps() interface{}
```

- *Type:* interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCount"></a>

```go
func QueueCount() *f64
```

- *Type:* *f64

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuV2VmNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

---


### GoogleTpuV2VmNetworkConfigsList <a name="GoogleTpuV2VmNetworkConfigsList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmNetworkConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTpuV2VmNetworkConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.get"></a>

```go
func Get(index *f64) GoogleTpuV2VmNetworkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTpuV2VmNetworkConfigsOutputReference <a name="GoogleTpuV2VmNetworkConfigsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmNetworkConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTpuV2VmNetworkConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetCanIpForward">ResetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetEnableExternalIps">ResetEnableExternalIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetQueueCount">ResetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCanIpForward` <a name="ResetCanIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetCanIpForward"></a>

```go
func ResetCanIpForward()
```

##### `ResetEnableExternalIps` <a name="ResetEnableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetEnableExternalIps"></a>

```go
func ResetEnableExternalIps()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetQueueCount` <a name="ResetQueueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetQueueCount"></a>

```go
func ResetQueueCount()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForwardInput">CanIpForwardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIpsInput">EnableExternalIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCountInput">QueueCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIps">EnableExternalIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCount">QueueCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanIpForwardInput`<sup>Optional</sup> <a name="CanIpForwardInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForwardInput"></a>

```go
func CanIpForwardInput() interface{}
```

- *Type:* interface{}

---

##### `EnableExternalIpsInput`<sup>Optional</sup> <a name="EnableExternalIpsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIpsInput"></a>

```go
func EnableExternalIpsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `QueueCountInput`<sup>Optional</sup> <a name="QueueCountInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCountInput"></a>

```go
func QueueCountInput() *f64
```

- *Type:* *f64

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForward"></a>

```go
func CanIpForward() interface{}
```

- *Type:* interface{}

---

##### `EnableExternalIps`<sup>Required</sup> <a name="EnableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIps"></a>

```go
func EnableExternalIps() interface{}
```

- *Type:* interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCount"></a>

```go
func QueueCount() *f64
```

- *Type:* *f64

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTpuV2VmNetworkEndpointsAccessConfigList <a name="GoogleTpuV2VmNetworkEndpointsAccessConfigList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmNetworkEndpointsAccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTpuV2VmNetworkEndpointsAccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.get"></a>

```go
func Get(index *f64) GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference <a name="GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.externalIp">ExternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig">GoogleTpuV2VmNetworkEndpointsAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.externalIp"></a>

```go
func ExternalIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuV2VmNetworkEndpointsAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig">GoogleTpuV2VmNetworkEndpointsAccessConfig</a>

---


### GoogleTpuV2VmNetworkEndpointsList <a name="GoogleTpuV2VmNetworkEndpointsList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmNetworkEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTpuV2VmNetworkEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.get"></a>

```go
func Get(index *f64) GoogleTpuV2VmNetworkEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleTpuV2VmNetworkEndpointsOutputReference <a name="GoogleTpuV2VmNetworkEndpointsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmNetworkEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTpuV2VmNetworkEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList">GoogleTpuV2VmNetworkEndpointsAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints">GoogleTpuV2VmNetworkEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.accessConfig"></a>

```go
func AccessConfig() GoogleTpuV2VmNetworkEndpointsAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList">GoogleTpuV2VmNetworkEndpointsAccessConfigList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuV2VmNetworkEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints">GoogleTpuV2VmNetworkEndpoints</a>

---


### GoogleTpuV2VmSchedulingConfigOutputReference <a name="GoogleTpuV2VmSchedulingConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmSchedulingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTpuV2VmSchedulingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetReserved">ResetReserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetSpot">ResetSpot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetPreemptible"></a>

```go
func ResetPreemptible()
```

##### `ResetReserved` <a name="ResetReserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetReserved"></a>

```go
func ResetReserved()
```

##### `ResetSpot` <a name="ResetSpot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetSpot"></a>

```go
func ResetSpot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reservedInput">ReservedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.spotInput">SpotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reserved">Reserved</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.spot">Spot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptibleInput"></a>

```go
func PreemptibleInput() interface{}
```

- *Type:* interface{}

---

##### `ReservedInput`<sup>Optional</sup> <a name="ReservedInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reservedInput"></a>

```go
func ReservedInput() interface{}
```

- *Type:* interface{}

---

##### `SpotInput`<sup>Optional</sup> <a name="SpotInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.spotInput"></a>

```go
func SpotInput() interface{}
```

- *Type:* interface{}

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptible"></a>

```go
func Preemptible() interface{}
```

- *Type:* interface{}

---

##### `Reserved`<sup>Required</sup> <a name="Reserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reserved"></a>

```go
func Reserved() interface{}
```

- *Type:* interface{}

---

##### `Spot`<sup>Required</sup> <a name="Spot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.spot"></a>

```go
func Spot() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuV2VmSchedulingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

---


### GoogleTpuV2VmServiceAccountOutputReference <a name="GoogleTpuV2VmServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTpuV2VmServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scope">Scope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scope"></a>

```go
func Scope() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuV2VmServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

---


### GoogleTpuV2VmShieldedInstanceConfigOutputReference <a name="GoogleTpuV2VmShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmShieldedInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTpuV2VmShieldedInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```go
func EnableSecureBootInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```go
func EnableSecureBoot() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuV2VmShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

---


### GoogleTpuV2VmSymptomsList <a name="GoogleTpuV2VmSymptomsList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmSymptomsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTpuV2VmSymptomsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.get"></a>

```go
func Get(index *f64) GoogleTpuV2VmSymptomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleTpuV2VmSymptomsOutputReference <a name="GoogleTpuV2VmSymptomsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmSymptomsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTpuV2VmSymptomsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.symptomType">SymptomType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.workerId">WorkerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms">GoogleTpuV2VmSymptoms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `SymptomType`<sup>Required</sup> <a name="SymptomType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.symptomType"></a>

```go
func SymptomType() *string
```

- *Type:* *string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.workerId"></a>

```go
func WorkerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuV2VmSymptoms
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms">GoogleTpuV2VmSymptoms</a>

---


### GoogleTpuV2VmTimeoutsOutputReference <a name="GoogleTpuV2VmTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletpuv2vm"

googletpuv2vm.NewGoogleTpuV2VmTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTpuV2VmTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



