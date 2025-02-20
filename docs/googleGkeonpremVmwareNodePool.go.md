# `googleGkeonpremVmwareNodePool` Submodule <a name="`googleGkeonpremVmwareNodePool` Submodule" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremVmwareNodePool <a name="GoogleGkeonpremVmwareNodePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePool(scope Construct, id *string, config GoogleGkeonpremVmwareNodePoolConfig) GoogleGkeonpremVmwareNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig">GoogleGkeonpremVmwareNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig">GoogleGkeonpremVmwareNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling">PutNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetNodePoolAutoscaling">ResetNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig"></a>

```go
func PutConfig(value GoogleGkeonpremVmwareNodePoolConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

---

##### `PutNodePoolAutoscaling` <a name="PutNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling"></a>

```go
func PutNodePoolAutoscaling(value GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGkeonpremVmwareNodePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetId"></a>

```go
func ResetId()
```

##### `ResetNodePoolAutoscaling` <a name="ResetNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetNodePoolAutoscaling"></a>

```go
func ResetNodePoolAutoscaling()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGkeonpremVmwareNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGkeonpremVmwareNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeonpremVmwareNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference">GoogleGkeonpremVmwareNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscaling">NodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.onPremVersion">OnPremVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList">GoogleGkeonpremVmwareNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference">GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscalingInput">NodePoolAutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareClusterInput">VmwareClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareCluster">VmwareCluster</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.config"></a>

```go
func Config() GoogleGkeonpremVmwareNodePoolConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference">GoogleGkeonpremVmwareNodePoolConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `NodePoolAutoscaling`<sup>Required</sup> <a name="NodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscaling"></a>

```go
func NodePoolAutoscaling() GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a>

---

##### `OnPremVersion`<sup>Required</sup> <a name="OnPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.onPremVersion"></a>

```go
func OnPremVersion() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.status"></a>

```go
func Status() GoogleGkeonpremVmwareNodePoolStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList">GoogleGkeonpremVmwareNodePoolStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeouts"></a>

```go
func Timeouts() GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference">GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.configInput"></a>

```go
func ConfigInput() GoogleGkeonpremVmwareNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodePoolAutoscalingInput`<sup>Optional</sup> <a name="NodePoolAutoscalingInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscalingInput"></a>

```go
func NodePoolAutoscalingInput() GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmwareClusterInput`<sup>Optional</sup> <a name="VmwareClusterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareClusterInput"></a>

```go
func VmwareClusterInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `VmwareCluster`<sup>Required</sup> <a name="VmwareCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareCluster"></a>

```go
func VmwareCluster() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremVmwareNodePoolConfig <a name="GoogleGkeonpremVmwareNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

&googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA,
	Location: *string,
	Name: *string,
	VmwareCluster: *string,
	Annotations: *map[string]*string,
	DisplayName: *string,
	Id: *string,
	NodePoolAutoscaling: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.name">Name</a></code> | <code>*string</code> | The vmware node pool name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.vmwareCluster">VmwareCluster</a></code> | <code>*string</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations on the node Pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#id GoogleGkeonpremVmwareNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling">NodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | node_pool_autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#project GoogleGkeonpremVmwareNodePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.config"></a>

```go
Config GoogleGkeonpremVmwareNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#config GoogleGkeonpremVmwareNodePool#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#location GoogleGkeonpremVmwareNodePool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The vmware node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#name GoogleGkeonpremVmwareNodePool#name}

---

##### `VmwareCluster`<sup>Required</sup> <a name="VmwareCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.vmwareCluster"></a>

```go
VmwareCluster *string
```

- *Type:* *string

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#vmware_cluster GoogleGkeonpremVmwareNodePool#vmware_cluster}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations on the node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#annotations GoogleGkeonpremVmwareNodePool#annotations}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#display_name GoogleGkeonpremVmwareNodePool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#id GoogleGkeonpremVmwareNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodePoolAutoscaling`<sup>Optional</sup> <a name="NodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling"></a>

```go
NodePoolAutoscaling GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

node_pool_autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#node_pool_autoscaling GoogleGkeonpremVmwareNodePool#node_pool_autoscaling}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#project GoogleGkeonpremVmwareNodePool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.timeouts"></a>

```go
Timeouts GoogleGkeonpremVmwareNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#timeouts GoogleGkeonpremVmwareNodePool#timeouts}

---

### GoogleGkeonpremVmwareNodePoolConfigA <a name="GoogleGkeonpremVmwareNodePoolConfigA" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

&googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePoolConfigA {
	ImageType: *string,
	BootDiskSizeGb: *f64,
	Cpus: *f64,
	EnableLoadBalancer: interface{},
	Image: *string,
	Labels: *map[string]*string,
	MemoryMb: *f64,
	Replicas: *f64,
	Taints: interface{},
	VsphereConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.imageType">ImageType</a></code> | <code>*string</code> | The OS image to be used for each node in a node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | VMware disk size to be used during creation. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.cpus">Cpus</a></code> | <code>*f64</code> | The number of CPUs for each node in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer">EnableLoadBalancer</a></code> | <code>interface{}</code> | Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.image">Image</a></code> | <code>*string</code> | The OS image name in vCenter, only valid when using Windows. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.memoryMb">MemoryMb</a></code> | <code>*f64</code> | The megabytes of memory for each node in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.replicas">Replicas</a></code> | <code>*f64</code> | The number of nodes in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.taints">Taints</a></code> | <code>interface{}</code> | taints block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.vsphereConfig">VsphereConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | vsphere_config block. |

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.imageType"></a>

```go
ImageType *string
```

- *Type:* *string

The OS image to be used for each node in a node pool.

Currently 'cos', 'cos_cgv2', 'ubuntu', 'ubuntu_cgv2', 'ubuntu_containerd' and 'windows' are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#image_type GoogleGkeonpremVmwareNodePool#image_type}

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb"></a>

```go
BootDiskSizeGb *f64
```

- *Type:* *f64

VMware disk size to be used during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#boot_disk_size_gb GoogleGkeonpremVmwareNodePool#boot_disk_size_gb}

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.cpus"></a>

```go
Cpus *f64
```

- *Type:* *f64

The number of CPUs for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#cpus GoogleGkeonpremVmwareNodePool#cpus}

---

##### `EnableLoadBalancer`<sup>Optional</sup> <a name="EnableLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer"></a>

```go
EnableLoadBalancer interface{}
```

- *Type:* interface{}

Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#enable_load_balancer GoogleGkeonpremVmwareNodePool#enable_load_balancer}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.image"></a>

```go
Image *string
```

- *Type:* *string

The OS image name in vCenter, only valid when using Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#image GoogleGkeonpremVmwareNodePool#image}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#labels GoogleGkeonpremVmwareNodePool#labels}

---

##### `MemoryMb`<sup>Optional</sup> <a name="MemoryMb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.memoryMb"></a>

```go
MemoryMb *f64
```

- *Type:* *f64

The megabytes of memory for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#memory_mb GoogleGkeonpremVmwareNodePool#memory_mb}

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.replicas"></a>

```go
Replicas *f64
```

- *Type:* *f64

The number of nodes in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#replicas GoogleGkeonpremVmwareNodePool#replicas}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.taints"></a>

```go
Taints interface{}
```

- *Type:* interface{}

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#taints GoogleGkeonpremVmwareNodePool#taints}

---

##### `VsphereConfig`<sup>Optional</sup> <a name="VsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.vsphereConfig"></a>

```go
VsphereConfig GoogleGkeonpremVmwareNodePoolConfigVsphereConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a>

vsphere_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#vsphere_config GoogleGkeonpremVmwareNodePool#vsphere_config}

---

### GoogleGkeonpremVmwareNodePoolConfigTaints <a name="GoogleGkeonpremVmwareNodePoolConfigTaints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

&googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePoolConfigTaints {
	Key: *string,
	Value: *string,
	Effect: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.key">Key</a></code> | <code>*string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.value">Value</a></code> | <code>*string</code> | Value associated with the effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.effect">Effect</a></code> | <code>*string</code> | Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.key"></a>

```go
Key *string
```

- *Type:* *string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#key GoogleGkeonpremVmwareNodePool#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#value GoogleGkeonpremVmwareNodePool#value}

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#effect GoogleGkeonpremVmwareNodePool#effect}

---

### GoogleGkeonpremVmwareNodePoolConfigVsphereConfig <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

&googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig {
	Datastore: *string,
	HostGroups: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.datastore">Datastore</a></code> | <code>*string</code> | The name of the vCenter datastore. Inherited from the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.hostGroups">HostGroups</a></code> | <code>*[]*string</code> | Vsphere host groups to apply to all VMs in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |

---

##### `Datastore`<sup>Optional</sup> <a name="Datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.datastore"></a>

```go
Datastore *string
```

- *Type:* *string

The name of the vCenter datastore. Inherited from the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#datastore GoogleGkeonpremVmwareNodePool#datastore}

---

##### `HostGroups`<sup>Optional</sup> <a name="HostGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.hostGroups"></a>

```go
HostGroups *[]*string
```

- *Type:* *[]*string

Vsphere host groups to apply to all VMs in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#host_groups GoogleGkeonpremVmwareNodePool#host_groups}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#tags GoogleGkeonpremVmwareNodePool#tags}

---

### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

&googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags {
	Category: *string,
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.property.category">Category</a></code> | <code>*string</code> | The Vsphere tag category. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.property.tag">Tag</a></code> | <code>*string</code> | The Vsphere tag name. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.property.category"></a>

```go
Category *string
```

- *Type:* *string

The Vsphere tag category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#category GoogleGkeonpremVmwareNodePool#category}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The Vsphere tag name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#tag GoogleGkeonpremVmwareNodePool#tag}

---

### GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling <a name="GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

&googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling {
	MaxReplicas: *f64,
	MinReplicas: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | Maximum number of replicas in the NodePool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | Minimum number of replicas in the NodePool. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas"></a>

```go
MaxReplicas *f64
```

- *Type:* *f64

Maximum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#max_replicas GoogleGkeonpremVmwareNodePool#max_replicas}

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas"></a>

```go
MinReplicas *f64
```

- *Type:* *f64

Minimum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#min_replicas GoogleGkeonpremVmwareNodePool#min_replicas}

---

### GoogleGkeonpremVmwareNodePoolStatus <a name="GoogleGkeonpremVmwareNodePoolStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

&googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePoolStatus {

}
```


### GoogleGkeonpremVmwareNodePoolStatusConditions <a name="GoogleGkeonpremVmwareNodePoolStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

&googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePoolStatusConditions {

}
```


### GoogleGkeonpremVmwareNodePoolTimeouts <a name="GoogleGkeonpremVmwareNodePoolTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

&googlegkeonpremvmwarenodepool.GoogleGkeonpremVmwareNodePoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#create GoogleGkeonpremVmwareNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#delete GoogleGkeonpremVmwareNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#update GoogleGkeonpremVmwareNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#create GoogleGkeonpremVmwareNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#delete GoogleGkeonpremVmwareNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gkeonprem_vmware_node_pool#update GoogleGkeonpremVmwareNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremVmwareNodePoolConfigAOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareNodePoolConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig">PutVsphereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer">ResetEnableLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb">ResetMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetTaints">ResetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetVsphereConfig">ResetVsphereConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putTaints"></a>

```go
func PutTaints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVsphereConfig` <a name="PutVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig"></a>

```go
func PutVsphereConfig(value GoogleGkeonpremVmwareNodePoolConfigVsphereConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a>

---

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb"></a>

```go
func ResetBootDiskSizeGb()
```

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetCpus"></a>

```go
func ResetCpus()
```

##### `ResetEnableLoadBalancer` <a name="ResetEnableLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer"></a>

```go
func ResetEnableLoadBalancer()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMemoryMb` <a name="ResetMemoryMb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb"></a>

```go
func ResetMemoryMb()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas"></a>

```go
func ResetReplicas()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetTaints"></a>

```go
func ResetTaints()
```

##### `ResetVsphereConfig` <a name="ResetVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetVsphereConfig"></a>

```go
func ResetVsphereConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList">GoogleGkeonpremVmwareNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig">VsphereConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput">CpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput">EnableLoadBalancerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput">MemoryMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput">TaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfigInput">VsphereConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpus">Cpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer">EnableLoadBalancer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageType">ImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb">MemoryMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicas">Replicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taints"></a>

```go
func Taints() GoogleGkeonpremVmwareNodePoolConfigTaintsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList">GoogleGkeonpremVmwareNodePoolConfigTaintsList</a>

---

##### `VsphereConfig`<sup>Required</sup> <a name="VsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig"></a>

```go
func VsphereConfig() GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference</a>

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput"></a>

```go
func BootDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput"></a>

```go
func CpusInput() *f64
```

- *Type:* *f64

---

##### `EnableLoadBalancerInput`<sup>Optional</sup> <a name="EnableLoadBalancerInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput"></a>

```go
func EnableLoadBalancerInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```go
func ImageTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MemoryMbInput`<sup>Optional</sup> <a name="MemoryMbInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput"></a>

```go
func MemoryMbInput() *f64
```

- *Type:* *f64

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput"></a>

```go
func ReplicasInput() *f64
```

- *Type:* *f64

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput"></a>

```go
func TaintsInput() interface{}
```

- *Type:* interface{}

---

##### `VsphereConfigInput`<sup>Optional</sup> <a name="VsphereConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfigInput"></a>

```go
func VsphereConfigInput() GoogleGkeonpremVmwareNodePoolConfigVsphereConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a>

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb"></a>

```go
func BootDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpus"></a>

```go
func Cpus() *f64
```

- *Type:* *f64

---

##### `EnableLoadBalancer`<sup>Required</sup> <a name="EnableLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer"></a>

```go
func EnableLoadBalancer() interface{}
```

- *Type:* interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageType"></a>

```go
func ImageType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MemoryMb`<sup>Required</sup> <a name="MemoryMb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb"></a>

```go
func MemoryMb() *f64
```

- *Type:* *f64

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicas"></a>

```go
func Replicas() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

---


### GoogleGkeonpremVmwareNodePoolConfigTaintsList <a name="GoogleGkeonpremVmwareNodePoolConfigTaintsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolConfigTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareNodePoolConfigTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEffect` <a name="ResetEffect" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect"></a>

```go
func ResetEffect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetDatastore">ResetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetHostGroups">ResetHostGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatastore` <a name="ResetDatastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetDatastore"></a>

```go
func ResetDatastore()
```

##### `ResetHostGroups` <a name="ResetHostGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetHostGroups"></a>

```go
func ResetHostGroups()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastoreInput">DatastoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroupsInput">HostGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore">Datastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroups">HostGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags"></a>

```go
func Tags() GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a>

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastoreInput"></a>

```go
func DatastoreInput() *string
```

- *Type:* *string

---

##### `HostGroupsInput`<sup>Optional</sup> <a name="HostGroupsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroupsInput"></a>

```go
func HostGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore"></a>

```go
func Datastore() *string
```

- *Type:* *string

---

##### `HostGroups`<sup>Required</sup> <a name="HostGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroups"></a>

```go
func HostGroups() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareNodePoolConfigVsphereConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a>

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference <a name="GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput"></a>

```go
func MaxReplicasInput() *f64
```

- *Type:* *f64

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput"></a>

```go
func MinReplicasInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas"></a>

```go
func MaxReplicas() *f64
```

- *Type:* *f64

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas"></a>

```go
func MinReplicas() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---


### GoogleGkeonpremVmwareNodePoolStatusConditionsList <a name="GoogleGkeonpremVmwareNodePoolStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareNodePoolStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference <a name="GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions">GoogleGkeonpremVmwareNodePoolStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareNodePoolStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions">GoogleGkeonpremVmwareNodePoolStatusConditions</a>

---


### GoogleGkeonpremVmwareNodePoolStatusList <a name="GoogleGkeonpremVmwareNodePoolStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeonpremVmwareNodePoolStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.get"></a>

```go
func Get(index *f64) GoogleGkeonpremVmwareNodePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeonpremVmwareNodePoolStatusOutputReference <a name="GoogleGkeonpremVmwareNodePoolStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeonpremVmwareNodePoolStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList">GoogleGkeonpremVmwareNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus">GoogleGkeonpremVmwareNodePoolStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.conditions"></a>

```go
func Conditions() GoogleGkeonpremVmwareNodePoolStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList">GoogleGkeonpremVmwareNodePoolStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeonpremVmwareNodePoolStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus">GoogleGkeonpremVmwareNodePoolStatus</a>

---


### GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference <a name="GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkeonpremvmwarenodepool"

googlegkeonpremvmwarenodepool.NewGoogleGkeonpremVmwareNodePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



