# `googleComputeRegionNetworkEndpointGroup` Submodule <a name="`googleComputeRegionNetworkEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkEndpointGroup <a name="GoogleComputeRegionNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group google_compute_region_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.NewGoogleComputeRegionNetworkEndpointGroup(scope Construct, id *string, config GoogleComputeRegionNetworkEndpointGroupConfig) GoogleComputeRegionNetworkEndpointGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig">GoogleComputeRegionNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig">GoogleComputeRegionNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine">PutAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction">PutCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun">PutCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putPscData">PutPscData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment">PutServerlessDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetAppEngine">ResetAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudFunction">ResetCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudRun">ResetCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetworkEndpointType">ResetNetworkEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscData">ResetPscData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscTargetService">ResetPscTargetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetServerlessDeployment">ResetServerlessDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppEngine` <a name="PutAppEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine"></a>

```go
func PutAppEngine(value GoogleComputeRegionNetworkEndpointGroupAppEngine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `PutCloudFunction` <a name="PutCloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction"></a>

```go
func PutCloudFunction(value GoogleComputeRegionNetworkEndpointGroupCloudFunction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `PutCloudRun` <a name="PutCloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun"></a>

```go
func PutCloudRun(value GoogleComputeRegionNetworkEndpointGroupCloudRun)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `PutPscData` <a name="PutPscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putPscData"></a>

```go
func PutPscData(value GoogleComputeRegionNetworkEndpointGroupPscData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putPscData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

---

##### `PutServerlessDeployment` <a name="PutServerlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment"></a>

```go
func PutServerlessDeployment(value GoogleComputeRegionNetworkEndpointGroupServerlessDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRegionNetworkEndpointGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>

---

##### `ResetAppEngine` <a name="ResetAppEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetAppEngine"></a>

```go
func ResetAppEngine()
```

##### `ResetCloudFunction` <a name="ResetCloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudFunction"></a>

```go
func ResetCloudFunction()
```

##### `ResetCloudRun` <a name="ResetCloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudRun"></a>

```go
func ResetCloudRun()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworkEndpointType` <a name="ResetNetworkEndpointType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetworkEndpointType"></a>

```go
func ResetNetworkEndpointType()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPscData` <a name="ResetPscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscData"></a>

```go
func ResetPscData()
```

##### `ResetPscTargetService` <a name="ResetPscTargetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscTargetService"></a>

```go
func ResetPscTargetService()
```

##### `ResetServerlessDeployment` <a name="ResetServerlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetServerlessDeployment"></a>

```go
func ResetServerlessDeployment()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeRegionNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeRegionNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference">GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunction">CloudFunction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRun">CloudRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscData">PscData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference">GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeployment">ServerlessDeployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference">GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngineInput">AppEngineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunctionInput">CloudFunctionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRunInput">CloudRunInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput">NetworkEndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscDataInput">PscDataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput">PscTargetServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeploymentInput">ServerlessDeploymentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType">NetworkEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetService">PscTargetService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppEngine`<sup>Required</sup> <a name="AppEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngine"></a>

```go
func AppEngine() GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference">GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference</a>

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunction"></a>

```go
func CloudFunction() GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a>

---

##### `CloudRun`<sup>Required</sup> <a name="CloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRun"></a>

```go
func CloudRun() GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference</a>

---

##### `PscData`<sup>Required</sup> <a name="PscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscData"></a>

```go
func PscData() GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference">GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServerlessDeployment`<sup>Required</sup> <a name="ServerlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeployment"></a>

```go
func ServerlessDeployment() GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference">GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `AppEngineInput`<sup>Optional</sup> <a name="AppEngineInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngineInput"></a>

```go
func AppEngineInput() GoogleComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `CloudFunctionInput`<sup>Optional</sup> <a name="CloudFunctionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunctionInput"></a>

```go
func CloudFunctionInput() GoogleComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `CloudRunInput`<sup>Optional</sup> <a name="CloudRunInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRunInput"></a>

```go
func CloudRunInput() GoogleComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkEndpointTypeInput`<sup>Optional</sup> <a name="NetworkEndpointTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```go
func NetworkEndpointTypeInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PscDataInput`<sup>Optional</sup> <a name="PscDataInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscDataInput"></a>

```go
func PscDataInput() GoogleComputeRegionNetworkEndpointGroupPscData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

---

##### `PscTargetServiceInput`<sup>Optional</sup> <a name="PscTargetServiceInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput"></a>

```go
func PscTargetServiceInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServerlessDeploymentInput`<sup>Optional</sup> <a name="ServerlessDeploymentInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeploymentInput"></a>

```go
func ServerlessDeploymentInput() GoogleComputeRegionNetworkEndpointGroupServerlessDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType"></a>

```go
func NetworkEndpointType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PscTargetService`<sup>Required</sup> <a name="PscTargetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetService"></a>

```go
func PscTargetService() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkEndpointGroupAppEngine <a name="GoogleComputeRegionNetworkEndpointGroupAppEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

&googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroupAppEngine {
	Service: *string,
	UrlMask: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.service">Service</a></code> | <code>*string</code> | Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.urlMask">UrlMask</a></code> | <code>*string</code> | A template to parse service and version fields from a request URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.version">Version</a></code> | <code>*string</code> | Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2". |

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.service"></a>

```go
Service *string
```

- *Type:* *string

Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#service GoogleComputeRegionNetworkEndpointGroup#service}

---

##### `UrlMask`<sup>Optional</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.urlMask"></a>

```go
UrlMask *string
```

- *Type:* *string

A template to parse service and version fields from a request URL.

URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.version"></a>

```go
Version *string
```

- *Type:* *string

Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#version GoogleComputeRegionNetworkEndpointGroup#version}

---

### GoogleComputeRegionNetworkEndpointGroupCloudFunction <a name="GoogleComputeRegionNetworkEndpointGroupCloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

&googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction {
	Function: *string,
	UrlMask: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.function">Function</a></code> | <code>*string</code> | A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask">UrlMask</a></code> | <code>*string</code> | A template to parse function field from a request URL. |

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.function"></a>

```go
Function *string
```

- *Type:* *string

A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#function GoogleComputeRegionNetworkEndpointGroup#function}

---

##### `UrlMask`<sup>Optional</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask"></a>

```go
UrlMask *string
```

- *Type:* *string

A template to parse function field from a request URL.

URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

### GoogleComputeRegionNetworkEndpointGroupCloudRun <a name="GoogleComputeRegionNetworkEndpointGroupCloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

&googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroupCloudRun {
	Service: *string,
	Tag: *string,
	UrlMask: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.service">Service</a></code> | <code>*string</code> | Cloud Run service is the main resource of Cloud Run. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.tag">Tag</a></code> | <code>*string</code> | Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.urlMask">UrlMask</a></code> | <code>*string</code> | A template to parse service and tag fields from a request URL. |

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.service"></a>

```go
Service *string
```

- *Type:* *string

Cloud Run service is the main resource of Cloud Run.

The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#service GoogleComputeRegionNetworkEndpointGroup#service}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information.

The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#tag GoogleComputeRegionNetworkEndpointGroup#tag}

---

##### `UrlMask`<sup>Optional</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.urlMask"></a>

```go
UrlMask *string
```

- *Type:* *string

A template to parse service and tag fields from a request URL.

URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

### GoogleComputeRegionNetworkEndpointGroupConfig <a name="GoogleComputeRegionNetworkEndpointGroupConfig" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

&googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Region: *string,
	AppEngine: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine,
	CloudFunction: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction,
	CloudRun: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun,
	Description: *string,
	Id: *string,
	Network: *string,
	NetworkEndpointType: *string,
	Project: *string,
	PscData: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData,
	PscTargetService: *string,
	ServerlessDeployment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment,
	Subnetwork: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudFunction">CloudFunction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudRun">CloudRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#id GoogleComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.network">Network</a></code> | <code>*string</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType">NetworkEndpointType</a></code> | <code>*string</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#project GoogleComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscData">PscData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | psc_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscTargetService">PscTargetService</a></code> | <code>*string</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.serverlessDeployment">ServerlessDeployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | serverless_deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | This field is only used for PSC NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#name GoogleComputeRegionNetworkEndpointGroup#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#region GoogleComputeRegionNetworkEndpointGroup#region}

---

##### `AppEngine`<sup>Optional</sup> <a name="AppEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.appEngine"></a>

```go
AppEngine GoogleComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#app_engine GoogleComputeRegionNetworkEndpointGroup#app_engine}

---

##### `CloudFunction`<sup>Optional</sup> <a name="CloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudFunction"></a>

```go
CloudFunction GoogleComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#cloud_function GoogleComputeRegionNetworkEndpointGroup#cloud_function}

---

##### `CloudRun`<sup>Optional</sup> <a name="CloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudRun"></a>

```go
CloudRun GoogleComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#cloud_run GoogleComputeRegionNetworkEndpointGroup#cloud_run}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#description GoogleComputeRegionNetworkEndpointGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#id GoogleComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

This field is only used for PSC and INTERNET NEGs.

The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#network GoogleComputeRegionNetworkEndpointGroup#network}

---

##### `NetworkEndpointType`<sup>Optional</sup> <a name="NetworkEndpointType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```go
NetworkEndpointType *string
```

- *Type:* *string

Type of network endpoints in this network endpoint group.

Defaults to SERVERLESS. Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "GCE_VM_IP_PORTMAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#network_endpoint_type GoogleComputeRegionNetworkEndpointGroup#network_endpoint_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#project GoogleComputeRegionNetworkEndpointGroup#project}.

---

##### `PscData`<sup>Optional</sup> <a name="PscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscData"></a>

```go
PscData GoogleComputeRegionNetworkEndpointGroupPscData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

psc_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#psc_data GoogleComputeRegionNetworkEndpointGroup#psc_data}

---

##### `PscTargetService`<sup>Optional</sup> <a name="PscTargetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscTargetService"></a>

```go
PscTargetService *string
```

- *Type:* *string

This field is only used for PSC and INTERNET NEGs.

The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#psc_target_service GoogleComputeRegionNetworkEndpointGroup#psc_target_service}

---

##### `ServerlessDeployment`<sup>Optional</sup> <a name="ServerlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.serverlessDeployment"></a>

```go
ServerlessDeployment GoogleComputeRegionNetworkEndpointGroupServerlessDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

serverless_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#serverless_deployment GoogleComputeRegionNetworkEndpointGroup#serverless_deployment}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

This field is only used for PSC NEGs.

Optional URL of the subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#subnetwork GoogleComputeRegionNetworkEndpointGroup#subnetwork}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRegionNetworkEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#timeouts GoogleComputeRegionNetworkEndpointGroup#timeouts}

---

### GoogleComputeRegionNetworkEndpointGroupPscData <a name="GoogleComputeRegionNetworkEndpointGroupPscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

&googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroupPscData {
	ProducerPort: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData.property.producerPort">ProducerPort</a></code> | <code>*string</code> | The PSC producer port to use when consumer PSC NEG connects to a producer. |

---

##### `ProducerPort`<sup>Optional</sup> <a name="ProducerPort" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData.property.producerPort"></a>

```go
ProducerPort *string
```

- *Type:* *string

The PSC producer port to use when consumer PSC NEG connects to a producer.

If
this flag isn't specified for a PSC NEG with endpoint type
private-service-connect, then PSC NEG will be connected to a first port in the
available PSC producer port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#producer_port GoogleComputeRegionNetworkEndpointGroup#producer_port}

---

### GoogleComputeRegionNetworkEndpointGroupServerlessDeployment <a name="GoogleComputeRegionNetworkEndpointGroupServerlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

&googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment {
	Platform: *string,
	Resource: *string,
	UrlMask: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.platform">Platform</a></code> | <code>*string</code> | The platform of the NEG backend target(s). Possible values: API Gateway: apigateway.googleapis.com. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.resource">Resource</a></code> | <code>*string</code> | The user-defined name of the workload/instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.urlMask">UrlMask</a></code> | <code>*string</code> | A template to parse platform-specific fields from a request URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.version">Version</a></code> | <code>*string</code> | The optional resource version. |

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

The platform of the NEG backend target(s). Possible values: API Gateway: apigateway.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#platform GoogleComputeRegionNetworkEndpointGroup#platform}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The user-defined name of the workload/instance.

This value must be provided explicitly or in the urlMask.
The resource identified by this value is platform-specific and is as follows: API Gateway: The gateway ID, App Engine: The service name,
Cloud Functions: The function name, Cloud Run: The service name

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#resource GoogleComputeRegionNetworkEndpointGroup#resource}

---

##### `UrlMask`<sup>Optional</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.urlMask"></a>

```go
UrlMask *string
```

- *Type:* *string

A template to parse platform-specific fields from a request URL.

URL mask allows for routing to multiple resources
on the same serverless platform without having to create multiple Network Endpoint Groups and backend resources.
The fields parsed by this template are platform-specific and are as follows: API Gateway: The gateway ID,
App Engine: The service and version, Cloud Functions: The function name, Cloud Run: The service and tag

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.version"></a>

```go
Version *string
```

- *Type:* *string

The optional resource version.

The version identified by this value is platform-specific and is follows:
API Gateway: Unused, App Engine: The service version, Cloud Functions: Unused, Cloud Run: The service tag

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#version GoogleComputeRegionNetworkEndpointGroup#version}

---

### GoogleComputeRegionNetworkEndpointGroupTimeouts <a name="GoogleComputeRegionNetworkEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

&googlecomputeregionnetworkendpointgroup.GoogleComputeRegionNetworkEndpointGroupTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#create GoogleComputeRegionNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#delete GoogleComputeRegionNetworkEndpointGroup#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#create GoogleComputeRegionNetworkEndpointGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint_group#delete GoogleComputeRegionNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.NewGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask">ResetUrlMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetUrlMask` <a name="ResetUrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask"></a>

```go
func ResetUrlMask()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput">UrlMaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask">UrlMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `UrlMaskInput`<sup>Optional</sup> <a name="UrlMaskInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput"></a>

```go
func UrlMaskInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask"></a>

```go
func UrlMask() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---


### GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.NewGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask">ResetUrlMask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction"></a>

```go
func ResetFunction()
```

##### `ResetUrlMask` <a name="ResetUrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask"></a>

```go
func ResetUrlMask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput">FunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput">UrlMaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask">UrlMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput"></a>

```go
func FunctionInput() *string
```

- *Type:* *string

---

##### `UrlMaskInput`<sup>Optional</sup> <a name="UrlMaskInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput"></a>

```go
func UrlMaskInput() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask"></a>

```go
func UrlMask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---


### GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.NewGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask">ResetUrlMask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetUrlMask` <a name="ResetUrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask"></a>

```go
func ResetUrlMask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput">UrlMaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask">UrlMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `UrlMaskInput`<sup>Optional</sup> <a name="UrlMaskInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput"></a>

```go
func UrlMaskInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask"></a>

```go
func UrlMask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---


### GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.NewGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resetProducerPort">ResetProducerPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProducerPort` <a name="ResetProducerPort" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resetProducerPort"></a>

```go
func ResetProducerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPortInput">ProducerPortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort">ProducerPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProducerPortInput`<sup>Optional</sup> <a name="ProducerPortInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPortInput"></a>

```go
func ProducerPortInput() *string
```

- *Type:* *string

---

##### `ProducerPort`<sup>Required</sup> <a name="ProducerPort" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort"></a>

```go
func ProducerPort() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionNetworkEndpointGroupPscData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

---


### GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.NewGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetUrlMask">ResetUrlMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetResource"></a>

```go
func ResetResource()
```

##### `ResetUrlMask` <a name="ResetUrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetUrlMask"></a>

```go
func ResetUrlMask()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMaskInput">UrlMaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMask">UrlMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `UrlMaskInput`<sup>Optional</sup> <a name="UrlMaskInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMaskInput"></a>

```go
func UrlMaskInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMask"></a>

```go
func UrlMask() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionNetworkEndpointGroupServerlessDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

---


### GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionnetworkendpointgroup"

googlecomputeregionnetworkendpointgroup.NewGoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



