# `googleGkeonpremVmwareCluster` Submodule <a name="`googleGkeonpremVmwareCluster` Submodule" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremVmwareCluster <a name="GoogleGkeonpremVmwareCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster google_gkeonprem_vmware_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareCluster(scope Construct, id *string, config GoogleGkeonpremVmwareClusterConfig) GoogleGkeonpremVmwareCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig">GoogleGkeonpremVmwareClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig">GoogleGkeonpremVmwareClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAntiAffinityGroups">PutAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAutoRepairConfig">PutAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putControlPlaneNode">PutControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putDataplaneV2">PutDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putUpgradePolicy">PutUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putVcenter">PutVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAntiAffinityGroups">ResetAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAutoRepairConfig">ResetAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDataplaneV2">ResetDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDisableBundledIngress">ResetDisableBundledIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetEnableControlPlaneV2">ResetEnableControlPlaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetUpgradePolicy">ResetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVcenter">ResetVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVmTrackingEnabled">ResetVmTrackingEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAntiAffinityGroups` <a name="PutAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAntiAffinityGroups"></a>

```go
func PutAntiAffinityGroups(value GoogleGkeonpremVmwareClusterAntiAffinityGroups)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAntiAffinityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAuthorization"></a>

```go
func PutAuthorization(value GoogleGkeonpremVmwareClusterAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

---

##### `PutAutoRepairConfig` <a name="PutAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAutoRepairConfig"></a>

```go
func PutAutoRepairConfig(value GoogleGkeonpremVmwareClusterAutoRepairConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAutoRepairConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `PutControlPlaneNode` <a name="PutControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putControlPlaneNode"></a>

```go
func PutControlPlaneNode(value GoogleGkeonpremVmwareClusterControlPlaneNode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putControlPlaneNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

---

##### `PutDataplaneV2` <a name="PutDataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putDataplaneV2"></a>

```go
func PutDataplaneV2(value GoogleGkeonpremVmwareClusterDataplaneV2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putDataplaneV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putLoadBalancer"></a>

```go
func PutLoadBalancer(value GoogleGkeonpremVmwareClusterLoadBalancer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putNetworkConfig"></a>

```go
func PutNetworkConfig(value GoogleGkeonpremVmwareClusterNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putStorage"></a>

```go
func PutStorage(value GoogleGkeonpremVmwareClusterStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGkeonpremVmwareClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

---

##### `PutUpgradePolicy` <a name="PutUpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putUpgradePolicy"></a>

```go
func PutUpgradePolicy(value GoogleGkeonpremVmwareClusterUpgradePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

---

##### `PutVcenter` <a name="PutVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putVcenter"></a>

```go
func PutVcenter(value GoogleGkeonpremVmwareClusterVcenter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putVcenter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetAntiAffinityGroups` <a name="ResetAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAntiAffinityGroups"></a>

```go
func ResetAntiAffinityGroups()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetAutoRepairConfig` <a name="ResetAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAutoRepairConfig"></a>

```go
func ResetAutoRepairConfig()
```

##### `ResetDataplaneV2` <a name="ResetDataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDataplaneV2"></a>

```go
func ResetDataplaneV2()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableBundledIngress` <a name="ResetDisableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDisableBundledIngress"></a>

```go
func ResetDisableBundledIngress()
```

##### `ResetEnableControlPlaneV2` <a name="ResetEnableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetEnableControlPlaneV2"></a>

```go
func ResetEnableControlPlaneV2()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetLoadBalancer"></a>

```go
func ResetLoadBalancer()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpgradePolicy` <a name="ResetUpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetUpgradePolicy"></a>

```go
func ResetUpgradePolicy()
```

##### `ResetVcenter` <a name="ResetVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVcenter"></a>

```go
func ResetVcenter()
```

##### `ResetVmTrackingEnabled` <a name="ResetVmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVmTrackingEnabled"></a>

```go
func ResetVmTrackingEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGkeonpremVmwareCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGkeonpremVmwareCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeonpremVmwareCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroups">AntiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference">GoogleGkeonpremVmwareClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfig">AutoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference">GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNode">ControlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2">DataplaneV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference">GoogleGkeonpremVmwareClusterDataplaneV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList">GoogleGkeonpremVmwareClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.localName">LocalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList">GoogleGkeonpremVmwareClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference">GoogleGkeonpremVmwareClusterStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference">GoogleGkeonpremVmwareClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference">GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.validationCheck">ValidationCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList">GoogleGkeonpremVmwareClusterValidationCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference">GoogleGkeonpremVmwareClusterVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembershipInput">AdminClusterMembershipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroupsInput">AntiAffinityGroupsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfigInput">AutoRepairConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNodeInput">ControlPlaneNodeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2Input">DataplaneV2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngressInput">DisableBundledIngressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2Input">EnableControlPlaneV2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersionInput">OnPremVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicyInput">UpgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenterInput">VcenterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabledInput">VmTrackingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembership">AdminClusterMembership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngress">DisableBundledIngress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2">EnableControlPlaneV2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersion">OnPremVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabled">VmTrackingEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AntiAffinityGroups`<sup>Required</sup> <a name="AntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroups"></a>

```go
func AntiAffinityGroups() GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a>

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorization"></a>

```go
func Authorization() GoogleGkeonpremVmwareClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference">GoogleGkeonpremVmwareClusterAuthorizationOutputReference</a>

---

##### `AutoRepairConfig`<sup>Required</sup> <a name="AutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfig"></a>

```go
func AutoRepairConfig() GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference">GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference</a>

---

##### `ControlPlaneNode`<sup>Required</sup> <a name="ControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNode"></a>

```go
func ControlPlaneNode() GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataplaneV2`<sup>Required</sup> <a name="DataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2"></a>

```go
func DataplaneV2() GoogleGkeonpremVmwareClusterDataplaneV2OutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference">GoogleGkeonpremVmwareClusterDataplaneV2OutputReference</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fleet"></a>

```go
func Fleet() GoogleGkeonpremVmwareClusterFleetList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList">GoogleGkeonpremVmwareClusterFleetList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancer"></a>

```go
func LoadBalancer() GoogleGkeonpremVmwareClusterLoadBalancerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerOutputReference</a>

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.localName"></a>

```go
func LocalName() *string
```

- *Type:* *string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfig"></a>

```go
func NetworkConfig() GoogleGkeonpremVmwareClusterNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.status"></a>

```go
func Status() GoogleGkeonpremVmwareClusterStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList">GoogleGkeonpremVmwareClusterStatusList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storage"></a>

```go
func Storage() GoogleGkeonpremVmwareClusterStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference">GoogleGkeonpremVmwareClusterStorageOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeouts"></a>

```go
func Timeouts() GoogleGkeonpremVmwareClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference">GoogleGkeonpremVmwareClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `UpgradePolicy`<sup>Required</sup> <a name="UpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicy"></a>

```go
func UpgradePolicy() GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference">GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference</a>

---

##### `ValidationCheck`<sup>Required</sup> <a name="ValidationCheck" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.validationCheck"></a>

```go
func ValidationCheck() GoogleGkeonpremVmwareClusterValidationCheckList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList">GoogleGkeonpremVmwareClusterValidationCheckList</a>

---

##### `Vcenter`<sup>Required</sup> <a name="Vcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenter"></a>

```go
func Vcenter() GoogleGkeonpremVmwareClusterVcenterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference">GoogleGkeonpremVmwareClusterVcenterOutputReference</a>

---

##### `AdminClusterMembershipInput`<sup>Optional</sup> <a name="AdminClusterMembershipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembershipInput"></a>

```go
func AdminClusterMembershipInput() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AntiAffinityGroupsInput`<sup>Optional</sup> <a name="AntiAffinityGroupsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroupsInput"></a>

```go
func AntiAffinityGroupsInput() GoogleGkeonpremVmwareClusterAntiAffinityGroups
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorizationInput"></a>

```go
func AuthorizationInput() GoogleGkeonpremVmwareClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

---

##### `AutoRepairConfigInput`<sup>Optional</sup> <a name="AutoRepairConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfigInput"></a>

```go
func AutoRepairConfigInput() GoogleGkeonpremVmwareClusterAutoRepairConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `ControlPlaneNodeInput`<sup>Optional</sup> <a name="ControlPlaneNodeInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNodeInput"></a>

```go
func ControlPlaneNodeInput() GoogleGkeonpremVmwareClusterControlPlaneNode
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

---

##### `DataplaneV2Input`<sup>Optional</sup> <a name="DataplaneV2Input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2Input"></a>

```go
func DataplaneV2Input() GoogleGkeonpremVmwareClusterDataplaneV2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableBundledIngressInput`<sup>Optional</sup> <a name="DisableBundledIngressInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngressInput"></a>

```go
func DisableBundledIngressInput() interface{}
```

- *Type:* interface{}

---

##### `EnableControlPlaneV2Input`<sup>Optional</sup> <a name="EnableControlPlaneV2Input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2Input"></a>

```go
func EnableControlPlaneV2Input() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() GoogleGkeonpremVmwareClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfigInput"></a>

```go
func NetworkConfigInput() GoogleGkeonpremVmwareClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

---

##### `OnPremVersionInput`<sup>Optional</sup> <a name="OnPremVersionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersionInput"></a>

```go
func OnPremVersionInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storageInput"></a>

```go
func StorageInput() GoogleGkeonpremVmwareClusterStorage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpgradePolicyInput`<sup>Optional</sup> <a name="UpgradePolicyInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicyInput"></a>

```go
func UpgradePolicyInput() GoogleGkeonpremVmwareClusterUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

---

##### `VcenterInput`<sup>Optional</sup> <a name="VcenterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenterInput"></a>

```go
func VcenterInput() GoogleGkeonpremVmwareClusterVcenter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

---

##### `VmTrackingEnabledInput`<sup>Optional</sup> <a name="VmTrackingEnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabledInput"></a>

```go
func VmTrackingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AdminClusterMembership`<sup>Required</sup> <a name="AdminClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembership"></a>

```go
func AdminClusterMembership() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableBundledIngress`<sup>Required</sup> <a name="DisableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngress"></a>

```go
func DisableBundledIngress() interface{}
```

- *Type:* interface{}

---

##### `EnableControlPlaneV2`<sup>Required</sup> <a name="EnableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2"></a>

```go
func EnableControlPlaneV2() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnPremVersion`<sup>Required</sup> <a name="OnPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersion"></a>

```go
func OnPremVersion() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `VmTrackingEnabled`<sup>Required</sup> <a name="VmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabled"></a>

```go
func VmTrackingEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremVmwareClusterAntiAffinityGroups <a name="GoogleGkeonpremVmwareClusterAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups {
	AagConfigDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled">AagConfigDisabled</a></code> | <code>interface{}</code> | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. |

---

##### `AagConfigDisabled`<sup>Required</sup> <a name="AagConfigDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled"></a>

```go
AagConfigDisabled interface{}
```

- *Type:* interface{}

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#aag_config_disabled GoogleGkeonpremVmwareCluster#aag_config_disabled}

---

### GoogleGkeonpremVmwareClusterAuthorization <a name="GoogleGkeonpremVmwareClusterAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterAuthorization {
	AdminUsers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code>interface{}</code> | admin_users block. |

---

##### `AdminUsers`<sup>Optional</sup> <a name="AdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization.property.adminUsers"></a>

```go
AdminUsers interface{}
```

- *Type:* interface{}

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#admin_users GoogleGkeonpremVmwareCluster#admin_users}

---

### GoogleGkeonpremVmwareClusterAuthorizationAdminUsers <a name="GoogleGkeonpremVmwareClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers {
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.property.username">Username</a></code> | <code>*string</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.property.username"></a>

```go
Username *string
```

- *Type:* *string

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#username GoogleGkeonpremVmwareCluster#username}

---

### GoogleGkeonpremVmwareClusterAutoRepairConfig <a name="GoogleGkeonpremVmwareClusterAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterAutoRepairConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether auto repair is enabled. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}

---

### GoogleGkeonpremVmwareClusterConfig <a name="GoogleGkeonpremVmwareClusterConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdminClusterMembership: *string,
	ControlPlaneNode: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode,
	Location: *string,
	Name: *string,
	OnPremVersion: *string,
	Annotations: *map[string]*string,
	AntiAffinityGroups: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups,
	Authorization: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization,
	AutoRepairConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig,
	DataplaneV2: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2,
	Description: *string,
	DisableBundledIngress: interface{},
	EnableControlPlaneV2: interface{},
	Id: *string,
	LoadBalancer: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer,
	NetworkConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig,
	Project: *string,
	Storage: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts,
	UpgradePolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy,
	Vcenter: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter,
	VmTrackingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.adminClusterMembership">AdminClusterMembership</a></code> | <code>*string</code> | The admin cluster this VMware User Cluster belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.controlPlaneNode">ControlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.name">Name</a></code> | <code>*string</code> | The VMware cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.onPremVersion">OnPremVersion</a></code> | <code>*string</code> | The Anthos clusters on the VMware version for your user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations on the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.antiAffinityGroups">AntiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.autoRepairConfig">AutoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dataplaneV2">DataplaneV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | dataplane_v2 block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.description">Description</a></code> | <code>*string</code> | A human readable description of this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.disableBundledIngress">DisableBundledIngress</a></code> | <code>interface{}</code> | Disable bundled ingress. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.enableControlPlaneV2">EnableControlPlaneV2</a></code> | <code>interface{}</code> | Enable control plane V2. Default to false. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#id GoogleGkeonpremVmwareCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#project GoogleGkeonpremVmwareCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | vcenter block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vmTrackingEnabled">VmTrackingEnabled</a></code> | <code>interface{}</code> | Enable VM tracking. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminClusterMembership`<sup>Required</sup> <a name="AdminClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.adminClusterMembership"></a>

```go
AdminClusterMembership *string
```

- *Type:* *string

The admin cluster this VMware User Cluster belongs to.

This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#admin_cluster_membership GoogleGkeonpremVmwareCluster#admin_cluster_membership}

---

##### `ControlPlaneNode`<sup>Required</sup> <a name="ControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.controlPlaneNode"></a>

```go
ControlPlaneNode GoogleGkeonpremVmwareClusterControlPlaneNode
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_node GoogleGkeonpremVmwareCluster#control_plane_node}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#location GoogleGkeonpremVmwareCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The VMware cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#name GoogleGkeonpremVmwareCluster#name}

---

##### `OnPremVersion`<sup>Required</sup> <a name="OnPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.onPremVersion"></a>

```go
OnPremVersion *string
```

- *Type:* *string

The Anthos clusters on the VMware version for your user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#on_prem_version GoogleGkeonpremVmwareCluster#on_prem_version}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations on the VMware User Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#annotations GoogleGkeonpremVmwareCluster#annotations}

---

##### `AntiAffinityGroups`<sup>Optional</sup> <a name="AntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.antiAffinityGroups"></a>

```go
AntiAffinityGroups GoogleGkeonpremVmwareClusterAntiAffinityGroups
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#anti_affinity_groups GoogleGkeonpremVmwareCluster#anti_affinity_groups}

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.authorization"></a>

```go
Authorization GoogleGkeonpremVmwareClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#authorization GoogleGkeonpremVmwareCluster#authorization}

---

##### `AutoRepairConfig`<sup>Optional</sup> <a name="AutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.autoRepairConfig"></a>

```go
AutoRepairConfig GoogleGkeonpremVmwareClusterAutoRepairConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#auto_repair_config GoogleGkeonpremVmwareCluster#auto_repair_config}

---

##### `DataplaneV2`<sup>Optional</sup> <a name="DataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dataplaneV2"></a>

```go
DataplaneV2 GoogleGkeonpremVmwareClusterDataplaneV2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

dataplane_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#dataplane_v2 GoogleGkeonpremVmwareCluster#dataplane_v2}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human readable description of this VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#description GoogleGkeonpremVmwareCluster#description}

---

##### `DisableBundledIngress`<sup>Optional</sup> <a name="DisableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.disableBundledIngress"></a>

```go
DisableBundledIngress interface{}
```

- *Type:* interface{}

Disable bundled ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#disable_bundled_ingress GoogleGkeonpremVmwareCluster#disable_bundled_ingress}

---

##### `EnableControlPlaneV2`<sup>Optional</sup> <a name="EnableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.enableControlPlaneV2"></a>

```go
EnableControlPlaneV2 interface{}
```

- *Type:* interface{}

Enable control plane V2. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#enable_control_plane_v2 GoogleGkeonpremVmwareCluster#enable_control_plane_v2}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#id GoogleGkeonpremVmwareCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.loadBalancer"></a>

```go
LoadBalancer GoogleGkeonpremVmwareClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#load_balancer GoogleGkeonpremVmwareCluster#load_balancer}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.networkConfig"></a>

```go
NetworkConfig GoogleGkeonpremVmwareClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#network_config GoogleGkeonpremVmwareCluster#network_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#project GoogleGkeonpremVmwareCluster#project}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.storage"></a>

```go
Storage GoogleGkeonpremVmwareClusterStorage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#storage GoogleGkeonpremVmwareCluster#storage}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.timeouts"></a>

```go
Timeouts GoogleGkeonpremVmwareClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#timeouts GoogleGkeonpremVmwareCluster#timeouts}

---

##### `UpgradePolicy`<sup>Optional</sup> <a name="UpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.upgradePolicy"></a>

```go
UpgradePolicy GoogleGkeonpremVmwareClusterUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#upgrade_policy GoogleGkeonpremVmwareCluster#upgrade_policy}

---

##### `Vcenter`<sup>Optional</sup> <a name="Vcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vcenter"></a>

```go
Vcenter GoogleGkeonpremVmwareClusterVcenter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#vcenter GoogleGkeonpremVmwareCluster#vcenter}

---

##### `VmTrackingEnabled`<sup>Optional</sup> <a name="VmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vmTrackingEnabled"></a>

```go
VmTrackingEnabled interface{}
```

- *Type:* interface{}

Enable VM tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#vm_tracking_enabled GoogleGkeonpremVmwareCluster#vm_tracking_enabled}

---

### GoogleGkeonpremVmwareClusterControlPlaneNode <a name="GoogleGkeonpremVmwareClusterControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterControlPlaneNode {
	AutoResizeConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig,
	Cpus: *f64,
	Memory: *f64,
	Replicas: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig">AutoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | auto_resize_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.cpus">Cpus</a></code> | <code>*f64</code> | The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.memory">Memory</a></code> | <code>*f64</code> | The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.replicas">Replicas</a></code> | <code>*f64</code> | The number of control plane nodes for this VMware User Cluster. (default: 1 replica). |

---

##### `AutoResizeConfig`<sup>Optional</sup> <a name="AutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig"></a>

```go
AutoResizeConfig GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#auto_resize_config GoogleGkeonpremVmwareCluster#auto_resize_config}

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.cpus"></a>

```go
Cpus *f64
```

- *Type:* *f64

The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster.

(default: 4 CPUs)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#cpus GoogleGkeonpremVmwareCluster#cpus}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#memory GoogleGkeonpremVmwareCluster#memory}

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.replicas"></a>

```go
Replicas *f64
```

- *Type:* *f64

The number of control plane nodes for this VMware User Cluster. (default: 1 replica).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#replicas GoogleGkeonpremVmwareCluster#replicas}

---

### GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable control plane node auto resizing. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable control plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}

---

### GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig {

}
```


### GoogleGkeonpremVmwareClusterDataplaneV2 <a name="GoogleGkeonpremVmwareClusterDataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterDataplaneV2 {
	AdvancedNetworking: interface{},
	DataplaneV2Enabled: interface{},
	WindowsDataplaneV2Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.advancedNetworking">AdvancedNetworking</a></code> | <code>interface{}</code> | Enable advanced networking which requires dataplane_v2_enabled to be set true. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled">DataplaneV2Enabled</a></code> | <code>interface{}</code> | Enables Dataplane V2. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled">WindowsDataplaneV2Enabled</a></code> | <code>interface{}</code> | Enable Dataplane V2 for clusters with Windows nodes. |

---

##### `AdvancedNetworking`<sup>Optional</sup> <a name="AdvancedNetworking" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.advancedNetworking"></a>

```go
AdvancedNetworking interface{}
```

- *Type:* interface{}

Enable advanced networking which requires dataplane_v2_enabled to be set true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#advanced_networking GoogleGkeonpremVmwareCluster#advanced_networking}

---

##### `DataplaneV2Enabled`<sup>Optional</sup> <a name="DataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled"></a>

```go
DataplaneV2Enabled interface{}
```

- *Type:* interface{}

Enables Dataplane V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#dataplane_v2_enabled GoogleGkeonpremVmwareCluster#dataplane_v2_enabled}

---

##### `WindowsDataplaneV2Enabled`<sup>Optional</sup> <a name="WindowsDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled"></a>

```go
WindowsDataplaneV2Enabled interface{}
```

- *Type:* interface{}

Enable Dataplane V2 for clusters with Windows nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#windows_dataplane_v2_enabled GoogleGkeonpremVmwareCluster#windows_dataplane_v2_enabled}

---

### GoogleGkeonpremVmwareClusterFleet <a name="GoogleGkeonpremVmwareClusterFleet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterFleet {

}
```


### GoogleGkeonpremVmwareClusterLoadBalancer <a name="GoogleGkeonpremVmwareClusterLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterLoadBalancer {
	F5Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config,
	ManualLbConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig,
	MetalLbConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig,
	VipConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.f5Config">F5Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a></code> | f5_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.metalLbConfig">MetalLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | metal_lb_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | vip_config block. |

---

##### `F5Config`<sup>Optional</sup> <a name="F5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.f5Config"></a>

```go
F5Config GoogleGkeonpremVmwareClusterLoadBalancerF5Config
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#f5_config GoogleGkeonpremVmwareCluster#f5_config}

---

##### `ManualLbConfig`<sup>Optional</sup> <a name="ManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.manualLbConfig"></a>

```go
ManualLbConfig GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#manual_lb_config GoogleGkeonpremVmwareCluster#manual_lb_config}

---

##### `MetalLbConfig`<sup>Optional</sup> <a name="MetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.metalLbConfig"></a>

```go
MetalLbConfig GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#metal_lb_config GoogleGkeonpremVmwareCluster#metal_lb_config}

---

##### `VipConfig`<sup>Optional</sup> <a name="VipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.vipConfig"></a>

```go
VipConfig GoogleGkeonpremVmwareClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#vip_config GoogleGkeonpremVmwareCluster#vip_config}

---

### GoogleGkeonpremVmwareClusterLoadBalancerF5Config <a name="GoogleGkeonpremVmwareClusterLoadBalancerF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config {
	Address: *string,
	Partition: *string,
	SnatPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.address">Address</a></code> | <code>*string</code> | The load balancer's IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.partition">Partition</a></code> | <code>*string</code> | he preexisting partition to be used by the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool">SnatPool</a></code> | <code>*string</code> | The pool name. Only necessary, if using SNAT. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.address"></a>

```go
Address *string
```

- *Type:* *string

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#address GoogleGkeonpremVmwareCluster#address}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#partition GoogleGkeonpremVmwareCluster#partition}

---

##### `SnatPool`<sup>Optional</sup> <a name="SnatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool"></a>

```go
SnatPool *string
```

- *Type:* *string

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#snat_pool GoogleGkeonpremVmwareCluster#snat_pool}

---

### GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig <a name="GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig {
	ControlPlaneNodePort: *f64,
	IngressHttpNodePort: *f64,
	IngressHttpsNodePort: *f64,
	KonnectivityServerNodePort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort">ControlPlaneNodePort</a></code> | <code>*f64</code> | NodePort for control plane service. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort">IngressHttpNodePort</a></code> | <code>*f64</code> | NodePort for ingress service's http. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort">IngressHttpsNodePort</a></code> | <code>*f64</code> | NodePort for ingress service's https. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort">KonnectivityServerNodePort</a></code> | <code>*f64</code> | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). |

---

##### `ControlPlaneNodePort`<sup>Optional</sup> <a name="ControlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort"></a>

```go
ControlPlaneNodePort *f64
```

- *Type:* *f64

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_node_port GoogleGkeonpremVmwareCluster#control_plane_node_port}

---

##### `IngressHttpNodePort`<sup>Optional</sup> <a name="IngressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort"></a>

```go
IngressHttpNodePort *f64
```

- *Type:* *f64

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ingress_http_node_port GoogleGkeonpremVmwareCluster#ingress_http_node_port}

---

##### `IngressHttpsNodePort`<sup>Optional</sup> <a name="IngressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort"></a>

```go
IngressHttpsNodePort *f64
```

- *Type:* *f64

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ingress_https_node_port GoogleGkeonpremVmwareCluster#ingress_https_node_port}

---

##### `KonnectivityServerNodePort`<sup>Optional</sup> <a name="KonnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort"></a>

```go
KonnectivityServerNodePort *f64
```

- *Type:* *f64

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#konnectivity_server_node_port GoogleGkeonpremVmwareCluster#konnectivity_server_node_port}

---

### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig {
	AddressPools: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools">AddressPools</a></code> | <code>interface{}</code> | address_pools block. |

---

##### `AddressPools`<sup>Required</sup> <a name="AddressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools"></a>

```go
AddressPools interface{}
```

- *Type:* interface{}

address_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#address_pools GoogleGkeonpremVmwareCluster#address_pools}

---

### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools {
	Addresses: *[]*string,
	Pool: *string,
	AvoidBuggyIps: interface{},
	ManualAssign: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses">Addresses</a></code> | <code>*[]*string</code> | The addresses that are part of this pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool">Pool</a></code> | <code>*string</code> | The name of the address pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps">AvoidBuggyIps</a></code> | <code>interface{}</code> | If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign">ManualAssign</a></code> | <code>interface{}</code> | If true, prevent IP addresses from being automatically assigned. |

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses"></a>

```go
Addresses *[]*string
```

- *Type:* *[]*string

The addresses that are part of this pool.

Each address
must be either in the CIDR form (1.2.3.0/24) or range
form (1.2.3.1-1.2.3.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#addresses GoogleGkeonpremVmwareCluster#addresses}

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool"></a>

```go
Pool *string
```

- *Type:* *string

The name of the address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#pool GoogleGkeonpremVmwareCluster#pool}

---

##### `AvoidBuggyIps`<sup>Optional</sup> <a name="AvoidBuggyIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps"></a>

```go
AvoidBuggyIps interface{}
```

- *Type:* interface{}

If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#avoid_buggy_ips GoogleGkeonpremVmwareCluster#avoid_buggy_ips}

---

##### `ManualAssign`<sup>Optional</sup> <a name="ManualAssign" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign"></a>

```go
ManualAssign interface{}
```

- *Type:* interface{}

If true, prevent IP addresses from being automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#manual_assign GoogleGkeonpremVmwareCluster#manual_assign}

---

### GoogleGkeonpremVmwareClusterLoadBalancerVipConfig <a name="GoogleGkeonpremVmwareClusterLoadBalancerVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig {
	ControlPlaneVip: *string,
	IngressVip: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>*string</code> | The VIP which you previously set aside for the Kubernetes API of this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip">IngressVip</a></code> | <code>*string</code> | The VIP which you previously set aside for ingress traffic into this cluster. |

---

##### `ControlPlaneVip`<sup>Optional</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```go
ControlPlaneVip *string
```

- *Type:* *string

The VIP which you previously set aside for the Kubernetes API of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_vip GoogleGkeonpremVmwareCluster#control_plane_vip}

---

##### `IngressVip`<sup>Optional</sup> <a name="IngressVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip"></a>

```go
IngressVip *string
```

- *Type:* *string

The VIP which you previously set aside for ingress traffic into this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ingress_vip GoogleGkeonpremVmwareCluster#ingress_vip}

---

### GoogleGkeonpremVmwareClusterNetworkConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterNetworkConfig {
	PodAddressCidrBlocks: *[]*string,
	ServiceAddressCidrBlocks: *[]*string,
	ControlPlaneV2Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config,
	DhcpIpConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig,
	HostConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig,
	StaticIpConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig,
	VcenterNetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>*[]*string</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>*[]*string</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config">ControlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | control_plane_v2_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig">DhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | dhcp_ip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | host_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.staticIpConfig">StaticIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | static_ip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.vcenterNetwork">VcenterNetwork</a></code> | <code>*string</code> | vcenter_network specifies vCenter network name. Inherited from the admin cluster. |

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks"></a>

```go
PodAddressCidrBlocks *[]*string
```

- *Type:* *[]*string

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#pod_address_cidr_blocks GoogleGkeonpremVmwareCluster#pod_address_cidr_blocks}

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks"></a>

```go
ServiceAddressCidrBlocks *[]*string
```

- *Type:* *[]*string

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#service_address_cidr_blocks GoogleGkeonpremVmwareCluster#service_address_cidr_blocks}

---

##### `ControlPlaneV2Config`<sup>Optional</sup> <a name="ControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config"></a>

```go
ControlPlaneV2Config GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

control_plane_v2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_v2_config GoogleGkeonpremVmwareCluster#control_plane_v2_config}

---

##### `DhcpIpConfig`<sup>Optional</sup> <a name="DhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig"></a>

```go
DhcpIpConfig GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#dhcp_ip_config GoogleGkeonpremVmwareCluster#dhcp_ip_config}

---

##### `HostConfig`<sup>Optional</sup> <a name="HostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.hostConfig"></a>

```go
HostConfig GoogleGkeonpremVmwareClusterNetworkConfigHostConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#host_config GoogleGkeonpremVmwareCluster#host_config}

---

##### `StaticIpConfig`<sup>Optional</sup> <a name="StaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.staticIpConfig"></a>

```go
StaticIpConfig GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#static_ip_config GoogleGkeonpremVmwareCluster#static_ip_config}

---

##### `VcenterNetwork`<sup>Optional</sup> <a name="VcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.vcenterNetwork"></a>

```go
VcenterNetwork *string
```

- *Type:* *string

vcenter_network specifies vCenter network name. Inherited from the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#vcenter_network GoogleGkeonpremVmwareCluster#vcenter_network}

---

### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config {
	ControlPlaneIpBlock: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock">ControlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | control_plane_ip_block block. |

---

##### `ControlPlaneIpBlock`<sup>Optional</sup> <a name="ControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock"></a>

```go
ControlPlaneIpBlock GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_ip_block GoogleGkeonpremVmwareCluster#control_plane_ip_block}

---

### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock {
	Gateway: *string,
	Ips: interface{},
	Netmask: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway">Gateway</a></code> | <code>*string</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips">Ips</a></code> | <code>interface{}</code> | ips block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask">Netmask</a></code> | <code>*string</code> | The netmask used by the VMware User Cluster. |

---

##### `Gateway`<sup>Optional</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#gateway GoogleGkeonpremVmwareCluster#gateway}

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips"></a>

```go
Ips interface{}
```

- *Type:* interface{}

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ips GoogleGkeonpremVmwareCluster#ips}

---

##### `Netmask`<sup>Optional</sup> <a name="Netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask"></a>

```go
Netmask *string
```

- *Type:* *string

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#netmask GoogleGkeonpremVmwareCluster#netmask}

---

### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps {
	Hostname: *string,
	Ip: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname of the machine. VM's name will be used if this field is empty. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip">Ip</a></code> | <code>*string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#hostname GoogleGkeonpremVmwareCluster#hostname}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ip GoogleGkeonpremVmwareCluster#ip}

---

### GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}

---

### GoogleGkeonpremVmwareClusterNetworkConfigHostConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfigHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig {
	DnsSearchDomains: *[]*string,
	DnsServers: *[]*string,
	NtpServers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains">DnsSearchDomains</a></code> | <code>*[]*string</code> | DNS search domains. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | DNS servers. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers">NtpServers</a></code> | <code>*[]*string</code> | NTP servers. |

---

##### `DnsSearchDomains`<sup>Optional</sup> <a name="DnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains"></a>

```go
DnsSearchDomains *[]*string
```

- *Type:* *[]*string

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#dns_search_domains GoogleGkeonpremVmwareCluster#dns_search_domains}

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers"></a>

```go
DnsServers *[]*string
```

- *Type:* *[]*string

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#dns_servers GoogleGkeonpremVmwareCluster#dns_servers}

---

##### `NtpServers`<sup>Optional</sup> <a name="NtpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers"></a>

```go
NtpServers *[]*string
```

- *Type:* *[]*string

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ntp_servers GoogleGkeonpremVmwareCluster#ntp_servers}

---

### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig {
	IpBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks">IpBlocks</a></code> | <code>interface{}</code> | ip_blocks block. |

---

##### `IpBlocks`<sup>Required</sup> <a name="IpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks"></a>

```go
IpBlocks interface{}
```

- *Type:* interface{}

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ip_blocks GoogleGkeonpremVmwareCluster#ip_blocks}

---

### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks {
	Gateway: *string,
	Ips: interface{},
	Netmask: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway">Gateway</a></code> | <code>*string</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips">Ips</a></code> | <code>interface{}</code> | ips block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask">Netmask</a></code> | <code>*string</code> | The netmask used by the VMware User Cluster. |

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#gateway GoogleGkeonpremVmwareCluster#gateway}

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips"></a>

```go
Ips interface{}
```

- *Type:* interface{}

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ips GoogleGkeonpremVmwareCluster#ips}

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask"></a>

```go
Netmask *string
```

- *Type:* *string

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#netmask GoogleGkeonpremVmwareCluster#netmask}

---

### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps {
	Ip: *string,
	Hostname: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip">Ip</a></code> | <code>*string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ip GoogleGkeonpremVmwareCluster#ip}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#hostname GoogleGkeonpremVmwareCluster#hostname}

---

### GoogleGkeonpremVmwareClusterStatus <a name="GoogleGkeonpremVmwareClusterStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterStatus {

}
```


### GoogleGkeonpremVmwareClusterStatusConditions <a name="GoogleGkeonpremVmwareClusterStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterStatusConditions {

}
```


### GoogleGkeonpremVmwareClusterStorage <a name="GoogleGkeonpremVmwareClusterStorage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterStorage {
	VsphereCsiDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage.property.vsphereCsiDisabled">VsphereCsiDisabled</a></code> | <code>interface{}</code> | Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default. |

---

##### `VsphereCsiDisabled`<sup>Required</sup> <a name="VsphereCsiDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage.property.vsphereCsiDisabled"></a>

```go
VsphereCsiDisabled interface{}
```

- *Type:* interface{}

Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#vsphere_csi_disabled GoogleGkeonpremVmwareCluster#vsphere_csi_disabled}

---

### GoogleGkeonpremVmwareClusterTimeouts <a name="GoogleGkeonpremVmwareClusterTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#create GoogleGkeonpremVmwareCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#delete GoogleGkeonpremVmwareCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#update GoogleGkeonpremVmwareCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#create GoogleGkeonpremVmwareCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#delete GoogleGkeonpremVmwareCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#update GoogleGkeonpremVmwareCluster#update}.

---

### GoogleGkeonpremVmwareClusterUpgradePolicy <a name="GoogleGkeonpremVmwareClusterUpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterUpgradePolicy {
	ControlPlaneOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly">ControlPlaneOnly</a></code> | <code>interface{}</code> | Controls whether the upgrade applies to the control plane only. |

---

##### `ControlPlaneOnly`<sup>Optional</sup> <a name="ControlPlaneOnly" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly"></a>

```go
ControlPlaneOnly interface{}
```

- *Type:* interface{}

Controls whether the upgrade applies to the control plane only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#control_plane_only GoogleGkeonpremVmwareCluster#control_plane_only}

---

### GoogleGkeonpremVmwareClusterValidationCheck <a name="GoogleGkeonpremVmwareClusterValidationCheck" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterValidationCheck {

}
```


### GoogleGkeonpremVmwareClusterValidationCheckStatus <a name="GoogleGkeonpremVmwareClusterValidationCheckStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterValidationCheckStatus {

}
```


### GoogleGkeonpremVmwareClusterValidationCheckStatusResult <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusResult" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult {

}
```


### GoogleGkeonpremVmwareClusterVcenter <a name="GoogleGkeonpremVmwareClusterVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

&googlegkeonpremvmwarecluster.GoogleGkeonpremVmwareClusterVcenter {
	CaCertData: *string,
	Cluster: *string,
	Datacenter: *string,
	Datastore: *string,
	Folder: *string,
	ResourcePool: *string,
	StoragePolicyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.caCertData">CaCertData</a></code> | <code>*string</code> | Contains the vCenter CA certificate public key for SSL verification. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.cluster">Cluster</a></code> | <code>*string</code> | The name of the vCenter cluster for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datacenter">Datacenter</a></code> | <code>*string</code> | The name of the vCenter datacenter for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datastore">Datastore</a></code> | <code>*string</code> | The name of the vCenter datastore for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.folder">Folder</a></code> | <code>*string</code> | The name of the vCenter folder for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.resourcePool">ResourcePool</a></code> | <code>*string</code> | The name of the vCenter resource pool for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.storagePolicyName">StoragePolicyName</a></code> | <code>*string</code> | The name of the vCenter storage policy for the user cluster. |

---

##### `CaCertData`<sup>Optional</sup> <a name="CaCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.caCertData"></a>

```go
CaCertData *string
```

- *Type:* *string

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#ca_cert_data GoogleGkeonpremVmwareCluster#ca_cert_data}

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The name of the vCenter cluster for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#cluster GoogleGkeonpremVmwareCluster#cluster}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

The name of the vCenter datacenter for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#datacenter GoogleGkeonpremVmwareCluster#datacenter}

---

##### `Datastore`<sup>Optional</sup> <a name="Datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datastore"></a>

```go
Datastore *string
```

- *Type:* *string

The name of the vCenter datastore for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#datastore GoogleGkeonpremVmwareCluster#datastore}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The name of the vCenter folder for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#folder GoogleGkeonpremVmwareCluster#folder}

---

##### `ResourcePool`<sup>Optional</sup> <a name="ResourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.resourcePool"></a>

```go
ResourcePool *string
```

- *Type:* *string

The name of the vCenter resource pool for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#resource_pool GoogleGkeonpremVmwareCluster#resource_pool}

---

##### `StoragePolicyName`<sup>Optional</sup> <a name="StoragePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.storagePolicyName"></a>

```go
StoragePolicyName *string
```

- *Type:* *string

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_gkeonprem_vmware_cluster#storage_policy_name GoogleGkeonpremVmwareCluster#storage_policy_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference <a name="GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput">AagConfigDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled">AagConfigDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AagConfigDisabledInput`<sup>Optional</sup> <a name="AagConfigDisabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput"></a>

```go
func AagConfigDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `AagConfigDisabled`<sup>Required</sup> <a name="AagConfigDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled"></a>

```go
func AagConfigDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterAntiAffinityGroups
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

---


### GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList <a name="GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterAuthorizationAdminUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference <a name="GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterAuthorizationOutputReference <a name="GoogleGkeonpremVmwareClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers">ResetAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers"></a>

```go
func PutAdminUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdminUsers` <a name="ResetAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers"></a>

```go
func ResetAdminUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList">GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers"></a>

```go
func AdminUsers() GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList">GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList</a>

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```go
func AdminUsersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

---


### GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference <a name="GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterAutoRepairConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig">PutAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig">ResetAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoResizeConfig` <a name="PutAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig"></a>

```go
func PutAutoResizeConfig(value GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `ResetAutoResizeConfig` <a name="ResetAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig"></a>

```go
func ResetAutoResizeConfig()
```

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus"></a>

```go
func ResetCpus()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas"></a>

```go
func ResetReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig">AutoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig">VsphereConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput">AutoResizeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput">CpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus">Cpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas">Replicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoResizeConfig`<sup>Required</sup> <a name="AutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig"></a>

```go
func AutoResizeConfig() GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a>

---

##### `VsphereConfig`<sup>Required</sup> <a name="VsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig"></a>

```go
func VsphereConfig() GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a>

---

##### `AutoResizeConfigInput`<sup>Optional</sup> <a name="AutoResizeConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput"></a>

```go
func AutoResizeConfigInput() GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput"></a>

```go
func CpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput"></a>

```go
func ReplicasInput() *f64
```

- *Type:* *f64

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus"></a>

```go
func Cpus() *f64
```

- *Type:* *f64

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas"></a>

```go
func Replicas() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterControlPlaneNode
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore">Datastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName">StoragePolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore"></a>

```go
func Datastore() *string
```

- *Type:* *string

---

##### `StoragePolicyName`<sup>Required</sup> <a name="StoragePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName"></a>

```go
func StoragePolicyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a>

---


### GoogleGkeonpremVmwareClusterDataplaneV2OutputReference <a name="GoogleGkeonpremVmwareClusterDataplaneV2OutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterDataplaneV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterDataplaneV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking">ResetAdvancedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled">ResetDataplaneV2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled">ResetWindowsDataplaneV2Enabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvancedNetworking` <a name="ResetAdvancedNetworking" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking"></a>

```go
func ResetAdvancedNetworking()
```

##### `ResetDataplaneV2Enabled` <a name="ResetDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled"></a>

```go
func ResetDataplaneV2Enabled()
```

##### `ResetWindowsDataplaneV2Enabled` <a name="ResetWindowsDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled"></a>

```go
func ResetWindowsDataplaneV2Enabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput">AdvancedNetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput">DataplaneV2EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput">WindowsDataplaneV2EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking">AdvancedNetworking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled">DataplaneV2Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled">WindowsDataplaneV2Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedNetworkingInput`<sup>Optional</sup> <a name="AdvancedNetworkingInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput"></a>

```go
func AdvancedNetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `DataplaneV2EnabledInput`<sup>Optional</sup> <a name="DataplaneV2EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput"></a>

```go
func DataplaneV2EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WindowsDataplaneV2EnabledInput`<sup>Optional</sup> <a name="WindowsDataplaneV2EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput"></a>

```go
func WindowsDataplaneV2EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AdvancedNetworking`<sup>Required</sup> <a name="AdvancedNetworking" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking"></a>

```go
func AdvancedNetworking() interface{}
```

- *Type:* interface{}

---

##### `DataplaneV2Enabled`<sup>Required</sup> <a name="DataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled"></a>

```go
func DataplaneV2Enabled() interface{}
```

- *Type:* interface{}

---

##### `WindowsDataplaneV2Enabled`<sup>Required</sup> <a name="WindowsDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled"></a>

```go
func WindowsDataplaneV2Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterDataplaneV2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

---


### GoogleGkeonpremVmwareClusterFleetList <a name="GoogleGkeonpremVmwareClusterFleetList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterFleetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterFleetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterFleetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeonpremVmwareClusterFleetOutputReference <a name="GoogleGkeonpremVmwareClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterFleetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterFleetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.membership">Membership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet">GoogleGkeonpremVmwareClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.membership"></a>

```go
func Membership() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet">GoogleGkeonpremVmwareClusterFleet</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool">ResetSnatPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetSnatPool` <a name="ResetSnatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool"></a>

```go
func ResetSnatPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput">SnatPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool">SnatPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `SnatPoolInput`<sup>Optional</sup> <a name="SnatPoolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput"></a>

```go
func SnatPoolInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `SnatPool`<sup>Required</sup> <a name="SnatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool"></a>

```go
func SnatPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterLoadBalancerF5Config
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort">ResetControlPlaneNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort">ResetIngressHttpNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort">ResetIngressHttpsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort">ResetKonnectivityServerNodePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlaneNodePort` <a name="ResetControlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort"></a>

```go
func ResetControlPlaneNodePort()
```

##### `ResetIngressHttpNodePort` <a name="ResetIngressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort"></a>

```go
func ResetIngressHttpNodePort()
```

##### `ResetIngressHttpsNodePort` <a name="ResetIngressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort"></a>

```go
func ResetIngressHttpsNodePort()
```

##### `ResetKonnectivityServerNodePort` <a name="ResetKonnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort"></a>

```go
func ResetKonnectivityServerNodePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput">ControlPlaneNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput">IngressHttpNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput">IngressHttpsNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput">KonnectivityServerNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort">ControlPlaneNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort">IngressHttpNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort">IngressHttpsNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort">KonnectivityServerNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneNodePortInput`<sup>Optional</sup> <a name="ControlPlaneNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput"></a>

```go
func ControlPlaneNodePortInput() *f64
```

- *Type:* *f64

---

##### `IngressHttpNodePortInput`<sup>Optional</sup> <a name="IngressHttpNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput"></a>

```go
func IngressHttpNodePortInput() *f64
```

- *Type:* *f64

---

##### `IngressHttpsNodePortInput`<sup>Optional</sup> <a name="IngressHttpsNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput"></a>

```go
func IngressHttpsNodePortInput() *f64
```

- *Type:* *f64

---

##### `KonnectivityServerNodePortInput`<sup>Optional</sup> <a name="KonnectivityServerNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput"></a>

```go
func KonnectivityServerNodePortInput() *f64
```

- *Type:* *f64

---

##### `ControlPlaneNodePort`<sup>Required</sup> <a name="ControlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort"></a>

```go
func ControlPlaneNodePort() *f64
```

- *Type:* *f64

---

##### `IngressHttpNodePort`<sup>Required</sup> <a name="IngressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort"></a>

```go
func IngressHttpNodePort() *f64
```

- *Type:* *f64

---

##### `IngressHttpsNodePort`<sup>Required</sup> <a name="IngressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort"></a>

```go
func IngressHttpsNodePort() *f64
```

- *Type:* *f64

---

##### `KonnectivityServerNodePort`<sup>Required</sup> <a name="KonnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort"></a>

```go
func KonnectivityServerNodePort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps">ResetAvoidBuggyIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign">ResetManualAssign</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvoidBuggyIps` <a name="ResetAvoidBuggyIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps"></a>

```go
func ResetAvoidBuggyIps()
```

##### `ResetManualAssign` <a name="ResetManualAssign" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign"></a>

```go
func ResetManualAssign()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput">AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput">AvoidBuggyIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput">ManualAssignInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput">PoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses">Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps">AvoidBuggyIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign">ManualAssign</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool">Pool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput"></a>

```go
func AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AvoidBuggyIpsInput`<sup>Optional</sup> <a name="AvoidBuggyIpsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput"></a>

```go
func AvoidBuggyIpsInput() interface{}
```

- *Type:* interface{}

---

##### `ManualAssignInput`<sup>Optional</sup> <a name="ManualAssignInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput"></a>

```go
func ManualAssignInput() interface{}
```

- *Type:* interface{}

---

##### `PoolInput`<sup>Optional</sup> <a name="PoolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput"></a>

```go
func PoolInput() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses"></a>

```go
func Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `AvoidBuggyIps`<sup>Required</sup> <a name="AvoidBuggyIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps"></a>

```go
func AvoidBuggyIps() interface{}
```

- *Type:* interface{}

---

##### `ManualAssign`<sup>Required</sup> <a name="ManualAssign" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign"></a>

```go
func ManualAssign() interface{}
```

- *Type:* interface{}

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool"></a>

```go
func Pool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools">PutAddressPools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddressPools` <a name="PutAddressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools"></a>

```go
func PutAddressPools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools">AddressPools</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput">AddressPoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressPools`<sup>Required</sup> <a name="AddressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools"></a>

```go
func AddressPools() GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a>

---

##### `AddressPoolsInput`<sup>Optional</sup> <a name="AddressPoolsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput"></a>

```go
func AddressPoolsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config">PutF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig">PutManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig">PutMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig">PutVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config">ResetF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig">ResetManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig">ResetMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig">ResetVipConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutF5Config` <a name="PutF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config"></a>

```go
func PutF5Config(value GoogleGkeonpremVmwareClusterLoadBalancerF5Config)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `PutManualLbConfig` <a name="PutManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```go
func PutManualLbConfig(value GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `PutMetalLbConfig` <a name="PutMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig"></a>

```go
func PutMetalLbConfig(value GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `PutVipConfig` <a name="PutVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig"></a>

```go
func PutVipConfig(value GoogleGkeonpremVmwareClusterLoadBalancerVipConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `ResetF5Config` <a name="ResetF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config"></a>

```go
func ResetF5Config()
```

##### `ResetManualLbConfig` <a name="ResetManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```go
func ResetManualLbConfig()
```

##### `ResetMetalLbConfig` <a name="ResetMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig"></a>

```go
func ResetMetalLbConfig()
```

##### `ResetVipConfig` <a name="ResetVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig"></a>

```go
func ResetVipConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config">F5Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig">MetalLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput">F5ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput">ManualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput">MetalLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput">VipConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `F5Config`<sup>Required</sup> <a name="F5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config"></a>

```go
func F5Config() GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a>

---

##### `ManualLbConfig`<sup>Required</sup> <a name="ManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```go
func ManualLbConfig() GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `MetalLbConfig`<sup>Required</sup> <a name="MetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig"></a>

```go
func MetalLbConfig() GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a>

---

##### `VipConfig`<sup>Required</sup> <a name="VipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig"></a>

```go
func VipConfig() GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a>

---

##### `F5ConfigInput`<sup>Optional</sup> <a name="F5ConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput"></a>

```go
func F5ConfigInput() GoogleGkeonpremVmwareClusterLoadBalancerF5Config
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `ManualLbConfigInput`<sup>Optional</sup> <a name="ManualLbConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```go
func ManualLbConfigInput() GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `MetalLbConfigInput`<sup>Optional</sup> <a name="MetalLbConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput"></a>

```go
func MetalLbConfigInput() GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `VipConfigInput`<sup>Optional</sup> <a name="VipConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```go
func VipConfigInput() GoogleGkeonpremVmwareClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip">ResetControlPlaneVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip">ResetIngressVip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlaneVip` <a name="ResetControlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip"></a>

```go
func ResetControlPlaneVip()
```

##### `ResetIngressVip` <a name="ResetIngressVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip"></a>

```go
func ResetIngressVip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">ControlPlaneVipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput">IngressVipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip">IngressVip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneVipInput`<sup>Optional</sup> <a name="ControlPlaneVipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```go
func ControlPlaneVipInput() *string
```

- *Type:* *string

---

##### `IngressVipInput`<sup>Optional</sup> <a name="IngressVipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput"></a>

```go
func IngressVipInput() *string
```

- *Type:* *string

---

##### `ControlPlaneVip`<sup>Required</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```go
func ControlPlaneVip() *string
```

- *Type:* *string

---

##### `IngressVip`<sup>Required</sup> <a name="IngressVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip"></a>

```go
func IngressVip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp">ResetIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp"></a>

```go
func ResetIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps">PutIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway">ResetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask">ResetNetmask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIps` <a name="PutIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps"></a>

```go
func PutIps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGateway` <a name="ResetGateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway"></a>

```go
func ResetGateway()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps"></a>

```go
func ResetIps()
```

##### `ResetNetmask` <a name="ResetNetmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask"></a>

```go
func ResetNetmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips">Ips</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput">IpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask">Netmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips"></a>

```go
func Ips() GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput"></a>

```go
func IpsInput() interface{}
```

- *Type:* interface{}

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput"></a>

```go
func NetmaskInput() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask"></a>

```go
func Netmask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock">PutControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock">ResetControlPlaneIpBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPlaneIpBlock` <a name="PutControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock"></a>

```go
func PutControlPlaneIpBlock(value GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `ResetControlPlaneIpBlock` <a name="ResetControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock"></a>

```go
func ResetControlPlaneIpBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock">ControlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput">ControlPlaneIpBlockInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneIpBlock`<sup>Required</sup> <a name="ControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock"></a>

```go
func ControlPlaneIpBlock() GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a>

---

##### `ControlPlaneIpBlockInput`<sup>Optional</sup> <a name="ControlPlaneIpBlockInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput"></a>

```go
func ControlPlaneIpBlockInput() GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains">ResetDnsSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers">ResetNtpServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsSearchDomains` <a name="ResetDnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains"></a>

```go
func ResetDnsSearchDomains()
```

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers"></a>

```go
func ResetDnsServers()
```

##### `ResetNtpServers` <a name="ResetNtpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers"></a>

```go
func ResetNtpServers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput">DnsSearchDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput">NtpServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains">DnsSearchDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers">NtpServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsSearchDomainsInput`<sup>Optional</sup> <a name="DnsSearchDomainsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput"></a>

```go
func DnsSearchDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput"></a>

```go
func DnsServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NtpServersInput`<sup>Optional</sup> <a name="NtpServersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput"></a>

```go
func NtpServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsSearchDomains`<sup>Required</sup> <a name="DnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains"></a>

```go
func DnsSearchDomains() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `NtpServers`<sup>Required</sup> <a name="NtpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers"></a>

```go
func NtpServers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterNetworkConfigHostConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config">PutControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig">PutDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig">PutHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig">PutStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config">ResetControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig">ResetDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig">ResetHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig">ResetStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetVcenterNetwork">ResetVcenterNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPlaneV2Config` <a name="PutControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config"></a>

```go
func PutControlPlaneV2Config(value GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `PutDhcpIpConfig` <a name="PutDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig"></a>

```go
func PutDhcpIpConfig(value GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `PutHostConfig` <a name="PutHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig"></a>

```go
func PutHostConfig(value GoogleGkeonpremVmwareClusterNetworkConfigHostConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `PutStaticIpConfig` <a name="PutStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig"></a>

```go
func PutStaticIpConfig(value GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `ResetControlPlaneV2Config` <a name="ResetControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config"></a>

```go
func ResetControlPlaneV2Config()
```

##### `ResetDhcpIpConfig` <a name="ResetDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig"></a>

```go
func ResetDhcpIpConfig()
```

##### `ResetHostConfig` <a name="ResetHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig"></a>

```go
func ResetHostConfig()
```

##### `ResetStaticIpConfig` <a name="ResetStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig"></a>

```go
func ResetStaticIpConfig()
```

##### `ResetVcenterNetwork` <a name="ResetVcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetVcenterNetwork"></a>

```go
func ResetVcenterNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config">ControlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig">DhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig">StaticIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput">ControlPlaneV2ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput">DhcpIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput">HostConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput">PodAddressCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput">ServiceAddressCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput">StaticIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetworkInput">VcenterNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork">VcenterNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneV2Config`<sup>Required</sup> <a name="ControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config"></a>

```go
func ControlPlaneV2Config() GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a>

---

##### `DhcpIpConfig`<sup>Required</sup> <a name="DhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig"></a>

```go
func DhcpIpConfig() GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a>

---

##### `HostConfig`<sup>Required</sup> <a name="HostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig"></a>

```go
func HostConfig() GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a>

---

##### `StaticIpConfig`<sup>Required</sup> <a name="StaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig"></a>

```go
func StaticIpConfig() GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a>

---

##### `ControlPlaneV2ConfigInput`<sup>Optional</sup> <a name="ControlPlaneV2ConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput"></a>

```go
func ControlPlaneV2ConfigInput() GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `DhcpIpConfigInput`<sup>Optional</sup> <a name="DhcpIpConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput"></a>

```go
func DhcpIpConfigInput() GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `HostConfigInput`<sup>Optional</sup> <a name="HostConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput"></a>

```go
func HostConfigInput() GoogleGkeonpremVmwareClusterNetworkConfigHostConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `PodAddressCidrBlocksInput`<sup>Optional</sup> <a name="PodAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput"></a>

```go
func PodAddressCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAddressCidrBlocksInput`<sup>Optional</sup> <a name="ServiceAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput"></a>

```go
func ServiceAddressCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `StaticIpConfigInput`<sup>Optional</sup> <a name="StaticIpConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput"></a>

```go
func StaticIpConfigInput() GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `VcenterNetworkInput`<sup>Optional</sup> <a name="VcenterNetworkInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetworkInput"></a>

```go
func VcenterNetworkInput() *string
```

- *Type:* *string

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks"></a>

```go
func PodAddressCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks"></a>

```go
func ServiceAddressCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `VcenterNetwork`<sup>Required</sup> <a name="VcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork"></a>

```go
func VcenterNetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname"></a>

```go
func ResetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps">PutIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIps` <a name="PutIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps"></a>

```go
func PutIps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips">Ips</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput">IpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask">Netmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips"></a>

```go
func Ips() GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput"></a>

```go
func IpsInput() interface{}
```

- *Type:* interface{}

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput"></a>

```go
func NetmaskInput() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask"></a>

```go
func Netmask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks">PutIpBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpBlocks` <a name="PutIpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks"></a>

```go
func PutIpBlocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks">IpBlocks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput">IpBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpBlocks`<sup>Required</sup> <a name="IpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks"></a>

```go
func IpBlocks() GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a>

---

##### `IpBlocksInput`<sup>Optional</sup> <a name="IpBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput"></a>

```go
func IpBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---


### GoogleGkeonpremVmwareClusterStatusConditionsList <a name="GoogleGkeonpremVmwareClusterStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeonpremVmwareClusterStatusConditionsOutputReference <a name="GoogleGkeonpremVmwareClusterStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions">GoogleGkeonpremVmwareClusterStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions">GoogleGkeonpremVmwareClusterStatusConditions</a>

---


### GoogleGkeonpremVmwareClusterStatusList <a name="GoogleGkeonpremVmwareClusterStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeonpremVmwareClusterStatusOutputReference <a name="GoogleGkeonpremVmwareClusterStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList">GoogleGkeonpremVmwareClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus">GoogleGkeonpremVmwareClusterStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.conditions"></a>

```go
func Conditions() GoogleGkeonpremVmwareClusterStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList">GoogleGkeonpremVmwareClusterStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus">GoogleGkeonpremVmwareClusterStatus</a>

---


### GoogleGkeonpremVmwareClusterStorageOutputReference <a name="GoogleGkeonpremVmwareClusterStorageOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput">VsphereCsiDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled">VsphereCsiDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VsphereCsiDisabledInput`<sup>Optional</sup> <a name="VsphereCsiDisabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput"></a>

```go
func VsphereCsiDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `VsphereCsiDisabled`<sup>Required</sup> <a name="VsphereCsiDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled"></a>

```go
func VsphereCsiDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterStorage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

---


### GoogleGkeonpremVmwareClusterTimeoutsOutputReference <a name="GoogleGkeonpremVmwareClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference <a name="GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterUpgradePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly">ResetControlPlaneOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlaneOnly` <a name="ResetControlPlaneOnly" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly"></a>

```go
func ResetControlPlaneOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput">ControlPlaneOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly">ControlPlaneOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneOnlyInput`<sup>Optional</sup> <a name="ControlPlaneOnlyInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput"></a>

```go
func ControlPlaneOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `ControlPlaneOnly`<sup>Required</sup> <a name="ControlPlaneOnly" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly"></a>

```go
func ControlPlaneOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

---


### GoogleGkeonpremVmwareClusterValidationCheckList <a name="GoogleGkeonpremVmwareClusterValidationCheckList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterValidationCheckList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterValidationCheckList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterValidationCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeonpremVmwareClusterValidationCheckOutputReference <a name="GoogleGkeonpremVmwareClusterValidationCheckOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterValidationCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterValidationCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.options">Options</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.scenario">Scenario</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList">GoogleGkeonpremVmwareClusterValidationCheckStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck">GoogleGkeonpremVmwareClusterValidationCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.options"></a>

```go
func Options() *string
```

- *Type:* *string

---

##### `Scenario`<sup>Required</sup> <a name="Scenario" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.scenario"></a>

```go
func Scenario() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.status"></a>

```go
func Status() GoogleGkeonpremVmwareClusterValidationCheckStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList">GoogleGkeonpremVmwareClusterValidationCheckStatusList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterValidationCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck">GoogleGkeonpremVmwareClusterValidationCheck</a>

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusList <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterValidationCheckStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterValidationCheckStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result">Result</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList">GoogleGkeonpremVmwareClusterValidationCheckStatusResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus">GoogleGkeonpremVmwareClusterValidationCheckStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result"></a>

```go
func Result() GoogleGkeonpremVmwareClusterValidationCheckStatusResultList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList">GoogleGkeonpremVmwareClusterValidationCheckStatusResultList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterValidationCheckStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus">GoogleGkeonpremVmwareClusterValidationCheckStatus</a>

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusResultList <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusResultList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterValidationCheckStatusResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareClusterValidationCheckStatusResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options">Options</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult">GoogleGkeonpremVmwareClusterValidationCheckStatusResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options"></a>

```go
func Options() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterValidationCheckStatusResult
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult">GoogleGkeonpremVmwareClusterValidationCheckStatusResult</a>

---


### GoogleGkeonpremVmwareClusterVcenterOutputReference <a name="GoogleGkeonpremVmwareClusterVcenterOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarecluster"

googlegkeonpremvmwarecluster.NewGoogleGkeonpremVmwareClusterVcenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareClusterVcenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCaCertData">ResetCaCertData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatastore">ResetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetResourcePool">ResetResourcePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName">ResetStoragePolicyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertData` <a name="ResetCaCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCaCertData"></a>

```go
func ResetCaCertData()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCluster"></a>

```go
func ResetCluster()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetDatastore` <a name="ResetDatastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatastore"></a>

```go
func ResetDatastore()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetResourcePool` <a name="ResetResourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetResourcePool"></a>

```go
func ResetResourcePool()
```

##### `ResetStoragePolicyName` <a name="ResetStoragePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName"></a>

```go
func ResetStoragePolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput">CaCertDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput">DatastoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput">ResourcePoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput">StoragePolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertData">CaCertData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastore">Datastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePool">ResourcePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName">StoragePolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `CaCertDataInput`<sup>Optional</sup> <a name="CaCertDataInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput"></a>

```go
func CaCertDataInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput"></a>

```go
func DatastoreInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `ResourcePoolInput`<sup>Optional</sup> <a name="ResourcePoolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput"></a>

```go
func ResourcePoolInput() *string
```

- *Type:* *string

---

##### `StoragePolicyNameInput`<sup>Optional</sup> <a name="StoragePolicyNameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput"></a>

```go
func StoragePolicyNameInput() *string
```

- *Type:* *string

---

##### `CaCertData`<sup>Required</sup> <a name="CaCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertData"></a>

```go
func CaCertData() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastore"></a>

```go
func Datastore() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `ResourcePool`<sup>Required</sup> <a name="ResourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePool"></a>

```go
func ResourcePool() *string
```

- *Type:* *string

---

##### `StoragePolicyName`<sup>Required</sup> <a name="StoragePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName"></a>

```go
func StoragePolicyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareClusterVcenter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

---



