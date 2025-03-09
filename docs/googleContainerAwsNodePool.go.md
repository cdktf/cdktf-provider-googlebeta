# `googleContainerAwsNodePool` Submodule <a name="`googleContainerAwsNodePool` Submodule" id="@cdktf/provider-google-beta.googleContainerAwsNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAwsNodePool <a name="GoogleContainerAwsNodePool" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool google_container_aws_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePool(scope Construct, id *string, config GoogleContainerAwsNodePoolConfig) GoogleContainerAwsNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig">GoogleContainerAwsNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig">GoogleContainerAwsNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putAutoscaling">PutAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putKubeletConfig">PutKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putManagement">PutManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putMaxPodsConstraint">PutMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putUpdateSettings">PutUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetKubeletConfig">ResetKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetManagement">ResetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetUpdateSettings">ResetUpdateSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscaling` <a name="PutAutoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putAutoscaling"></a>

```go
func PutAutoscaling(value GoogleContainerAwsNodePoolAutoscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putConfig"></a>

```go
func PutConfig(value GoogleContainerAwsNodePoolConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

---

##### `PutKubeletConfig` <a name="PutKubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putKubeletConfig"></a>

```go
func PutKubeletConfig(value GoogleContainerAwsNodePoolKubeletConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putKubeletConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a>

---

##### `PutManagement` <a name="PutManagement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putManagement"></a>

```go
func PutManagement(value GoogleContainerAwsNodePoolManagement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a>

---

##### `PutMaxPodsConstraint` <a name="PutMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putMaxPodsConstraint"></a>

```go
func PutMaxPodsConstraint(value GoogleContainerAwsNodePoolMaxPodsConstraint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putMaxPodsConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putTimeouts"></a>

```go
func PutTimeouts(value GoogleContainerAwsNodePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a>

---

##### `PutUpdateSettings` <a name="PutUpdateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putUpdateSettings"></a>

```go
func PutUpdateSettings(value GoogleContainerAwsNodePoolUpdateSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putUpdateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetId"></a>

```go
func ResetId()
```

##### `ResetKubeletConfig` <a name="ResetKubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetKubeletConfig"></a>

```go
func ResetKubeletConfig()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetManagement"></a>

```go
func ResetManagement()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdateSettings` <a name="ResetUpdateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetUpdateSettings"></a>

```go
func ResetUpdateSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAwsNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.GoogleContainerAwsNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.GoogleContainerAwsNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.GoogleContainerAwsNodePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.GoogleContainerAwsNodePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleContainerAwsNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleContainerAwsNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleContainerAwsNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAwsNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference">GoogleContainerAwsNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference">GoogleContainerAwsNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.kubeletConfig">KubeletConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference">GoogleContainerAwsNodePoolKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.management">Management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference">GoogleContainerAwsNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraint">MaxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference">GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference">GoogleContainerAwsNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateSettings">UpdateSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference">GoogleContainerAwsNodePoolUpdateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscalingInput">AutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.kubeletConfigInput">KubeletConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.managementInput">ManagementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraintInput">MaxPodsConstraintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateSettingsInput">UpdateSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscaling"></a>

```go
func Autoscaling() GoogleContainerAwsNodePoolAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference">GoogleContainerAwsNodePoolAutoscalingOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.config"></a>

```go
func Config() GoogleContainerAwsNodePoolConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference">GoogleContainerAwsNodePoolConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `KubeletConfig`<sup>Required</sup> <a name="KubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.kubeletConfig"></a>

```go
func KubeletConfig() GoogleContainerAwsNodePoolKubeletConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference">GoogleContainerAwsNodePoolKubeletConfigOutputReference</a>

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.management"></a>

```go
func Management() GoogleContainerAwsNodePoolManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference">GoogleContainerAwsNodePoolManagementOutputReference</a>

---

##### `MaxPodsConstraint`<sup>Required</sup> <a name="MaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraint"></a>

```go
func MaxPodsConstraint() GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference">GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeouts"></a>

```go
func Timeouts() GoogleContainerAwsNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference">GoogleContainerAwsNodePoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateSettings`<sup>Required</sup> <a name="UpdateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateSettings"></a>

```go
func UpdateSettings() GoogleContainerAwsNodePoolUpdateSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference">GoogleContainerAwsNodePoolUpdateSettingsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutoscalingInput`<sup>Optional</sup> <a name="AutoscalingInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscalingInput"></a>

```go
func AutoscalingInput() GoogleContainerAwsNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.configInput"></a>

```go
func ConfigInput() GoogleContainerAwsNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubeletConfigInput`<sup>Optional</sup> <a name="KubeletConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.kubeletConfigInput"></a>

```go
func KubeletConfigInput() GoogleContainerAwsNodePoolKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.managementInput"></a>

```go
func ManagementInput() GoogleContainerAwsNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a>

---

##### `MaxPodsConstraintInput`<sup>Optional</sup> <a name="MaxPodsConstraintInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraintInput"></a>

```go
func MaxPodsConstraintInput() GoogleContainerAwsNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateSettingsInput`<sup>Optional</sup> <a name="UpdateSettingsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateSettingsInput"></a>

```go
func UpdateSettingsInput() GoogleContainerAwsNodePoolUpdateSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAwsNodePoolAutoscaling <a name="GoogleContainerAwsNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolAutoscaling {
	MaxNodeCount: *f64,
	MinNodeCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | Maximum number of nodes in the NodePool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.maxNodeCount"></a>

```go
MaxNodeCount *f64
```

- *Type:* *f64

Maximum number of nodes in the NodePool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#max_node_count GoogleContainerAwsNodePool#max_node_count}

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.minNodeCount"></a>

```go
MinNodeCount *f64
```

- *Type:* *f64

Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#min_node_count GoogleContainerAwsNodePool#min_node_count}

---

### GoogleContainerAwsNodePoolConfig <a name="GoogleContainerAwsNodePoolConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Autoscaling: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling,
	Cluster: *string,
	Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA,
	Location: *string,
	MaxPodsConstraint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint,
	Name: *string,
	SubnetId: *string,
	Version: *string,
	Annotations: *map[string]*string,
	Id: *string,
	KubeletConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig,
	Management: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts,
	UpdateSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The awsCluster for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.maxPodsConstraint">MaxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.name">Name</a></code> | <code>*string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | The subnet where the node pool node run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.version">Version</a></code> | <code>*string</code> | The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#id GoogleContainerAwsNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.kubeletConfig">KubeletConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.management">Management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.updateSettings">UpdateSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a></code> | update_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.autoscaling"></a>

```go
Autoscaling GoogleContainerAwsNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#autoscaling GoogleContainerAwsNodePool#autoscaling}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The awsCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#cluster GoogleContainerAwsNodePool#cluster}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.config"></a>

```go
Config GoogleContainerAwsNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#config GoogleContainerAwsNodePool#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#location GoogleContainerAwsNodePool#location}

---

##### `MaxPodsConstraint`<sup>Required</sup> <a name="MaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.maxPodsConstraint"></a>

```go
MaxPodsConstraint GoogleContainerAwsNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#max_pods_constraint GoogleContainerAwsNodePool#max_pods_constraint}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#name GoogleContainerAwsNodePool#name}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

The subnet where the node pool node run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#subnet_id GoogleContainerAwsNodePool#subnet_id}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#version GoogleContainerAwsNodePool#version}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#annotations GoogleContainerAwsNodePool#annotations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#id GoogleContainerAwsNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubeletConfig`<sup>Optional</sup> <a name="KubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.kubeletConfig"></a>

```go
KubeletConfig GoogleContainerAwsNodePoolKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#kubelet_config GoogleContainerAwsNodePool#kubelet_config}

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.management"></a>

```go
Management GoogleContainerAwsNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#management GoogleContainerAwsNodePool#management}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#project GoogleContainerAwsNodePool#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.timeouts"></a>

```go
Timeouts GoogleContainerAwsNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#timeouts GoogleContainerAwsNodePool#timeouts}

---

##### `UpdateSettings`<sup>Optional</sup> <a name="UpdateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.updateSettings"></a>

```go
UpdateSettings GoogleContainerAwsNodePoolUpdateSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a>

update_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#update_settings GoogleContainerAwsNodePool#update_settings}

---

### GoogleContainerAwsNodePoolConfigA <a name="GoogleContainerAwsNodePoolConfigA" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfigA {
	ConfigEncryption: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption,
	IamInstanceProfile: *string,
	AutoscalingMetricsCollection: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection,
	ImageType: *string,
	InstancePlacement: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement,
	InstanceType: *string,
	Labels: *map[string]*string,
	ProxyConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig,
	RootVolume: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume,
	SecurityGroupIds: *[]*string,
	SpotConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig,
	SshConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig,
	Tags: *map[string]*string,
	Taints: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.configEncryption">ConfigEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | The name of the AWS IAM role assigned to nodes in the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection">AutoscalingMetricsCollection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | autoscaling_metrics_collection block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.imageType">ImageType</a></code> | <code>*string</code> | The OS image type to use on node pool instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instancePlacement">InstancePlacement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a></code> | instance_placement block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instanceType">InstanceType</a></code> | <code>*string</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.spotConfig">SpotConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a></code> | spot_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.taints">Taints</a></code> | <code>interface{}</code> | taints block. |

---

##### `ConfigEncryption`<sup>Required</sup> <a name="ConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.configEncryption"></a>

```go
ConfigEncryption GoogleContainerAwsNodePoolConfigConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#config_encryption GoogleContainerAwsNodePool#config_encryption}

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.iamInstanceProfile"></a>

```go
IamInstanceProfile *string
```

- *Type:* *string

The name of the AWS IAM role assigned to nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#iam_instance_profile GoogleContainerAwsNodePool#iam_instance_profile}

---

##### `AutoscalingMetricsCollection`<sup>Optional</sup> <a name="AutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection"></a>

```go
AutoscalingMetricsCollection GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

autoscaling_metrics_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#autoscaling_metrics_collection GoogleContainerAwsNodePool#autoscaling_metrics_collection}

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.imageType"></a>

```go
ImageType *string
```

- *Type:* *string

The OS image type to use on node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#image_type GoogleContainerAwsNodePool#image_type}

---

##### `InstancePlacement`<sup>Optional</sup> <a name="InstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instancePlacement"></a>

```go
InstancePlacement GoogleContainerAwsNodePoolConfigInstancePlacement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

instance_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#instance_placement GoogleContainerAwsNodePool#instance_placement}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#instance_type GoogleContainerAwsNodePool#instance_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#labels GoogleContainerAwsNodePool#labels}

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.proxyConfig"></a>

```go
ProxyConfig GoogleContainerAwsNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#proxy_config GoogleContainerAwsNodePool#proxy_config}

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.rootVolume"></a>

```go
RootVolume GoogleContainerAwsNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#root_volume GoogleContainerAwsNodePool#root_volume}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Optional.

The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#security_group_ids GoogleContainerAwsNodePool#security_group_ids}

---

##### `SpotConfig`<sup>Optional</sup> <a name="SpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.spotConfig"></a>

```go
SpotConfig GoogleContainerAwsNodePoolConfigSpotConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

spot_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#spot_config GoogleContainerAwsNodePool#spot_config}

---

##### `SshConfig`<sup>Optional</sup> <a name="SshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.sshConfig"></a>

```go
SshConfig GoogleContainerAwsNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#ssh_config GoogleContainerAwsNodePool#ssh_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#tags GoogleContainerAwsNodePool#tags}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.taints"></a>

```go
Taints interface{}
```

- *Type:* interface{}

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#taints GoogleContainerAwsNodePool#taints}

---

### GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection <a name="GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection {
	Granularity: *string,
	Metrics: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity">Granularity</a></code> | <code>*string</code> | The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics">Metrics</a></code> | <code>*[]*string</code> | The metrics to enable. |

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity"></a>

```go
Granularity *string
```

- *Type:* *string

The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#granularity GoogleContainerAwsNodePool#granularity}

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics"></a>

```go
Metrics *[]*string
```

- *Type:* *[]*string

The metrics to enable.

For a list of valid metrics, see https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html. If you specify granularity and don't specify any metrics, all metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#metrics GoogleContainerAwsNodePool#metrics}

---

### GoogleContainerAwsNodePoolConfigConfigEncryption <a name="GoogleContainerAwsNodePoolConfigConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfigConfigEncryption {
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN of the AWS KMS key used to encrypt node pool configuration. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN of the AWS KMS key used to encrypt node pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#kms_key_arn GoogleContainerAwsNodePool#kms_key_arn}

---

### GoogleContainerAwsNodePoolConfigInstancePlacement <a name="GoogleContainerAwsNodePoolConfigInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfigInstancePlacement {
	Tenancy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement.property.tenancy">Tenancy</a></code> | <code>*string</code> | The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST. |

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement.property.tenancy"></a>

```go
Tenancy *string
```

- *Type:* *string

The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#tenancy GoogleContainerAwsNodePool#tenancy}

---

### GoogleContainerAwsNodePoolConfigProxyConfig <a name="GoogleContainerAwsNodePoolConfigProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfigProxyConfig {
	SecretArn: *string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#secret_arn GoogleContainerAwsNodePool#secret_arn}

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#secret_version GoogleContainerAwsNodePool#secret_version}

---

### GoogleContainerAwsNodePoolConfigRootVolume <a name="GoogleContainerAwsNodePoolConfigRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfigRootVolume {
	Iops: *f64,
	KmsKeyArn: *string,
	SizeGib: *f64,
	Throughput: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.iops">Iops</a></code> | <code>*f64</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.sizeGib">SizeGib</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.throughput">Throughput</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.volumeType">VolumeType</a></code> | <code>*string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#iops GoogleContainerAwsNodePool#iops}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#kms_key_arn GoogleContainerAwsNodePool#kms_key_arn}

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.sizeGib"></a>

```go
SizeGib *f64
```

- *Type:* *f64

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#size_gib GoogleContainerAwsNodePool#size_gib}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#throughput GoogleContainerAwsNodePool#throughput}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#volume_type GoogleContainerAwsNodePool#volume_type}

---

### GoogleContainerAwsNodePoolConfigSpotConfig <a name="GoogleContainerAwsNodePoolConfigSpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfigSpotConfig {
	InstanceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | List of AWS EC2 instance types for creating a spot node pool's nodes. |

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig.property.instanceTypes"></a>

```go
InstanceTypes *[]*string
```

- *Type:* *[]*string

List of AWS EC2 instance types for creating a spot node pool's nodes.

The specified instance types must have the same number of CPUs and memory. You can use the Amazon EC2 Instance Selector tool (https://github.com/aws/amazon-ec2-instance-selector) to choose instance types with matching CPU and memory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#instance_types GoogleContainerAwsNodePool#instance_types}

---

### GoogleContainerAwsNodePoolConfigSshConfig <a name="GoogleContainerAwsNodePoolConfigSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfigSshConfig {
	Ec2KeyPair: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>*string</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair"></a>

```go
Ec2KeyPair *string
```

- *Type:* *string

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#ec2_key_pair GoogleContainerAwsNodePool#ec2_key_pair}

---

### GoogleContainerAwsNodePoolConfigTaints <a name="GoogleContainerAwsNodePoolConfigTaints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolConfigTaints {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.effect">Effect</a></code> | <code>*string</code> | The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.key">Key</a></code> | <code>*string</code> | Key for the taint. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.value">Value</a></code> | <code>*string</code> | Value for the taint. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#effect GoogleContainerAwsNodePool#effect}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.key"></a>

```go
Key *string
```

- *Type:* *string

Key for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#key GoogleContainerAwsNodePool#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#value GoogleContainerAwsNodePool#value}

---

### GoogleContainerAwsNodePoolKubeletConfig <a name="GoogleContainerAwsNodePoolKubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolKubeletConfig {
	CpuCfsQuota: interface{},
	CpuCfsQuotaPeriod: *string,
	CpuManagerPolicy: *string,
	PodPidsLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuCfsQuota">CpuCfsQuota</a></code> | <code>interface{}</code> | Whether or not to enable CPU CFS quota. Defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuCfsQuotaPeriod">CpuCfsQuotaPeriod</a></code> | <code>*string</code> | Optional. The CPU CFS quota period to use for the node. Defaults to "100ms". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuManagerPolicy">CpuManagerPolicy</a></code> | <code>*string</code> | The CpuManagerPolicy to use for the node. Defaults to "none". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.podPidsLimit">PodPidsLimit</a></code> | <code>*f64</code> | Optional. |

---

##### `CpuCfsQuota`<sup>Optional</sup> <a name="CpuCfsQuota" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuCfsQuota"></a>

```go
CpuCfsQuota interface{}
```

- *Type:* interface{}

Whether or not to enable CPU CFS quota. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#cpu_cfs_quota GoogleContainerAwsNodePool#cpu_cfs_quota}

---

##### `CpuCfsQuotaPeriod`<sup>Optional</sup> <a name="CpuCfsQuotaPeriod" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```go
CpuCfsQuotaPeriod *string
```

- *Type:* *string

Optional. The CPU CFS quota period to use for the node. Defaults to "100ms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#cpu_cfs_quota_period GoogleContainerAwsNodePool#cpu_cfs_quota_period}

---

##### `CpuManagerPolicy`<sup>Optional</sup> <a name="CpuManagerPolicy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuManagerPolicy"></a>

```go
CpuManagerPolicy *string
```

- *Type:* *string

The CpuManagerPolicy to use for the node. Defaults to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#cpu_manager_policy GoogleContainerAwsNodePool#cpu_manager_policy}

---

##### `PodPidsLimit`<sup>Optional</sup> <a name="PodPidsLimit" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.podPidsLimit"></a>

```go
PodPidsLimit *f64
```

- *Type:* *f64

Optional.

The maximum number of PIDs in each pod running on the node. The limit scales automatically based on underlying machine size if left unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#pod_pids_limit GoogleContainerAwsNodePool#pod_pids_limit}

---

### GoogleContainerAwsNodePoolManagement <a name="GoogleContainerAwsNodePoolManagement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolManagement {
	AutoRepair: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement.property.autoRepair">AutoRepair</a></code> | <code>interface{}</code> | Optional. Whether or not the nodes will be automatically repaired. |

---

##### `AutoRepair`<sup>Optional</sup> <a name="AutoRepair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement.property.autoRepair"></a>

```go
AutoRepair interface{}
```

- *Type:* interface{}

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#auto_repair GoogleContainerAwsNodePool#auto_repair}

---

### GoogleContainerAwsNodePoolMaxPodsConstraint <a name="GoogleContainerAwsNodePoolMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolMaxPodsConstraint {
	MaxPodsPerNode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | The maximum number of pods to schedule on a single node. |

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```go
MaxPodsPerNode *f64
```

- *Type:* *f64

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#max_pods_per_node GoogleContainerAwsNodePool#max_pods_per_node}

---

### GoogleContainerAwsNodePoolTimeouts <a name="GoogleContainerAwsNodePoolTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#create GoogleContainerAwsNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#delete GoogleContainerAwsNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#update GoogleContainerAwsNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#create GoogleContainerAwsNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#delete GoogleContainerAwsNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#update GoogleContainerAwsNodePool#update}.

---

### GoogleContainerAwsNodePoolUpdateSettings <a name="GoogleContainerAwsNodePoolUpdateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolUpdateSettings {
	SurgeSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings.property.surgeSettings">SurgeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a></code> | surge_settings block. |

---

##### `SurgeSettings`<sup>Optional</sup> <a name="SurgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings.property.surgeSettings"></a>

```go
SurgeSettings GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

surge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#surge_settings GoogleContainerAwsNodePool#surge_settings}

---

### GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings <a name="GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

&googlecontainerawsnodepool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings {
	MaxSurge: *f64,
	MaxUnavailable: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxSurge">MaxSurge</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxUnavailable">MaxUnavailable</a></code> | <code>*f64</code> | Optional. |

---

##### `MaxSurge`<sup>Optional</sup> <a name="MaxSurge" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxSurge"></a>

```go
MaxSurge *f64
```

- *Type:* *f64

Optional.

The maximum number of nodes that can be created beyond the current size of the node pool during the update process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#max_surge GoogleContainerAwsNodePool#max_surge}

---

##### `MaxUnavailable`<sup>Optional</sup> <a name="MaxUnavailable" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxUnavailable"></a>

```go
MaxUnavailable *f64
```

- *Type:* *f64

Optional.

The maximum number of nodes that can be simultaneously unavailable during the update process. A node is considered unavailable if its status is not Ready.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_aws_node_pool#max_unavailable GoogleContainerAwsNodePool#max_unavailable}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAwsNodePoolAutoscalingOutputReference <a name="GoogleContainerAwsNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolAutoscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolAutoscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```go
func MaxNodeCountInput() *f64
```

- *Type:* *f64

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```go
func MinNodeCountInput() *f64
```

- *Type:* *f64

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```go
func MaxNodeCount() *f64
```

- *Type:* *f64

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```go
func MinNodeCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

---


### GoogleContainerAwsNodePoolConfigAOutputReference <a name="GoogleContainerAwsNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection">PutAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putConfigEncryption">PutConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putInstancePlacement">PutInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSpotConfig">PutSpotConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSshConfig">PutSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection">ResetAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstancePlacement">ResetInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSpotConfig">ResetSpotConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSshConfig">ResetSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTaints">ResetTaints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingMetricsCollection` <a name="PutAutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection"></a>

```go
func PutAutoscalingMetricsCollection(value GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---

##### `PutConfigEncryption` <a name="PutConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putConfigEncryption"></a>

```go
func PutConfigEncryption(value GoogleContainerAwsNodePoolConfigConfigEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putConfigEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

---

##### `PutInstancePlacement` <a name="PutInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putInstancePlacement"></a>

```go
func PutInstancePlacement(value GoogleContainerAwsNodePoolConfigInstancePlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putInstancePlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putProxyConfig"></a>

```go
func PutProxyConfig(value GoogleContainerAwsNodePoolConfigProxyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putRootVolume"></a>

```go
func PutRootVolume(value GoogleContainerAwsNodePoolConfigRootVolume)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

---

##### `PutSpotConfig` <a name="PutSpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSpotConfig"></a>

```go
func PutSpotConfig(value GoogleContainerAwsNodePoolConfigSpotConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSpotConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

---

##### `PutSshConfig` <a name="PutSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSshConfig"></a>

```go
func PutSshConfig(value GoogleContainerAwsNodePoolConfigSshConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putTaints"></a>

```go
func PutTaints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoscalingMetricsCollection` <a name="ResetAutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection"></a>

```go
func ResetAutoscalingMetricsCollection()
```

##### `ResetImageType` <a name="ResetImageType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetImageType"></a>

```go
func ResetImageType()
```

##### `ResetInstancePlacement` <a name="ResetInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstancePlacement"></a>

```go
func ResetInstancePlacement()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetProxyConfig"></a>

```go
func ResetProxyConfig()
```

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetRootVolume"></a>

```go
func ResetRootVolume()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSpotConfig` <a name="ResetSpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSpotConfig"></a>

```go
func ResetSpotConfig()
```

##### `ResetSshConfig` <a name="ResetSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSshConfig"></a>

```go
func ResetSshConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTaints"></a>

```go
func ResetTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection">AutoscalingMetricsCollection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryption">ConfigEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference">GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacement">InstancePlacement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference">GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference">GoogleContainerAwsNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference">GoogleContainerAwsNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfig">SpotConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference">GoogleContainerAwsNodePoolConfigSpotConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference">GoogleContainerAwsNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList">GoogleContainerAwsNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput">AutoscalingMetricsCollectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput">ConfigEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacementInput">InstancePlacementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfigInput">SpotConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput">SshConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taintsInput">TaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageType">ImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingMetricsCollection`<sup>Required</sup> <a name="AutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection"></a>

```go
func AutoscalingMetricsCollection() GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a>

---

##### `ConfigEncryption`<sup>Required</sup> <a name="ConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryption"></a>

```go
func ConfigEncryption() GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference">GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference</a>

---

##### `InstancePlacement`<sup>Required</sup> <a name="InstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacement"></a>

```go
func InstancePlacement() GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference">GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference</a>

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfig"></a>

```go
func ProxyConfig() GoogleContainerAwsNodePoolConfigProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference">GoogleContainerAwsNodePoolConfigProxyConfigOutputReference</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolume"></a>

```go
func RootVolume() GoogleContainerAwsNodePoolConfigRootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference">GoogleContainerAwsNodePoolConfigRootVolumeOutputReference</a>

---

##### `SpotConfig`<sup>Required</sup> <a name="SpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfig"></a>

```go
func SpotConfig() GoogleContainerAwsNodePoolConfigSpotConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference">GoogleContainerAwsNodePoolConfigSpotConfigOutputReference</a>

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfig"></a>

```go
func SshConfig() GoogleContainerAwsNodePoolConfigSshConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference">GoogleContainerAwsNodePoolConfigSshConfigOutputReference</a>

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taints"></a>

```go
func Taints() GoogleContainerAwsNodePoolConfigTaintsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList">GoogleContainerAwsNodePoolConfigTaintsList</a>

---

##### `AutoscalingMetricsCollectionInput`<sup>Optional</sup> <a name="AutoscalingMetricsCollectionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput"></a>

```go
func AutoscalingMetricsCollectionInput() GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---

##### `ConfigEncryptionInput`<sup>Optional</sup> <a name="ConfigEncryptionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput"></a>

```go
func ConfigEncryptionInput() GoogleContainerAwsNodePoolConfigConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() *string
```

- *Type:* *string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```go
func ImageTypeInput() *string
```

- *Type:* *string

---

##### `InstancePlacementInput`<sup>Optional</sup> <a name="InstancePlacementInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacementInput"></a>

```go
func InstancePlacementInput() GoogleContainerAwsNodePoolConfigInstancePlacement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```go
func ProxyConfigInput() GoogleContainerAwsNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```go
func RootVolumeInput() GoogleContainerAwsNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SpotConfigInput`<sup>Optional</sup> <a name="SpotConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfigInput"></a>

```go
func SpotConfigInput() GoogleContainerAwsNodePoolConfigSpotConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

---

##### `SshConfigInput`<sup>Optional</sup> <a name="SshConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```go
func SshConfigInput() GoogleContainerAwsNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taintsInput"></a>

```go
func TaintsInput() interface{}
```

- *Type:* interface{}

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() *string
```

- *Type:* *string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageType"></a>

```go
func ImageType() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

---


### GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference <a name="GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics">ResetMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics"></a>

```go
func ResetMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput">GranularityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput">MetricsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity">Granularity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics">Metrics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput"></a>

```go
func GranularityInput() *string
```

- *Type:* *string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput"></a>

```go
func MetricsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity"></a>

```go
func Granularity() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics"></a>

```go
func Metrics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---


### GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference <a name="GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolConfigConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

---


### GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference <a name="GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigInstancePlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resetTenancy">ResetTenancy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resetTenancy"></a>

```go
func ResetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancyInput">TenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancyInput"></a>

```go
func TenancyInput() *string
```

- *Type:* *string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolConfigInstancePlacement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

---


### GoogleContainerAwsNodePoolConfigProxyConfigOutputReference <a name="GoogleContainerAwsNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigProxyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolConfigProxyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

---


### GoogleContainerAwsNodePoolConfigRootVolumeOutputReference <a name="GoogleContainerAwsNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigRootVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolConfigRootVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```go
func ResetSizeGib()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```go
func SizeGibInput() *f64
```

- *Type:* *f64

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```go
func SizeGib() *f64
```

- *Type:* *f64

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

---


### GoogleContainerAwsNodePoolConfigSpotConfigOutputReference <a name="GoogleContainerAwsNodePoolConfigSpotConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigSpotConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolConfigSpotConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypesInput"></a>

```go
func InstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypes"></a>

```go
func InstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolConfigSpotConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

---


### GoogleContainerAwsNodePoolConfigSshConfigOutputReference <a name="GoogleContainerAwsNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigSshConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolConfigSshConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput">Ec2KeyPairInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ec2KeyPairInput`<sup>Optional</sup> <a name="Ec2KeyPairInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput"></a>

```go
func Ec2KeyPairInput() *string
```

- *Type:* *string

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair"></a>

```go
func Ec2KeyPair() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

---


### GoogleContainerAwsNodePoolConfigTaintsList <a name="GoogleContainerAwsNodePoolConfigTaintsList" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleContainerAwsNodePoolConfigTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.get"></a>

```go
func Get(index *f64) GoogleContainerAwsNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleContainerAwsNodePoolConfigTaintsOutputReference <a name="GoogleContainerAwsNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolConfigTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleContainerAwsNodePoolConfigTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleContainerAwsNodePoolKubeletConfigOutputReference <a name="GoogleContainerAwsNodePoolKubeletConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolKubeletConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolKubeletConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuota">ResetCpuCfsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">ResetCpuCfsQuotaPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy">ResetCpuManagerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetPodPidsLimit">ResetPodPidsLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuCfsQuota` <a name="ResetCpuCfsQuota" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuota"></a>

```go
func ResetCpuCfsQuota()
```

##### `ResetCpuCfsQuotaPeriod` <a name="ResetCpuCfsQuotaPeriod" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```go
func ResetCpuCfsQuotaPeriod()
```

##### `ResetCpuManagerPolicy` <a name="ResetCpuManagerPolicy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy"></a>

```go
func ResetCpuManagerPolicy()
```

##### `ResetPodPidsLimit` <a name="ResetPodPidsLimit" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetPodPidsLimit"></a>

```go
func ResetPodPidsLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaInput">CpuCfsQuotaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">CpuCfsQuotaPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput">CpuManagerPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimitInput">PodPidsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuota">CpuCfsQuota</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">CpuCfsQuotaPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy">CpuManagerPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimit">PodPidsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCfsQuotaInput`<sup>Optional</sup> <a name="CpuCfsQuotaInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaInput"></a>

```go
func CpuCfsQuotaInput() interface{}
```

- *Type:* interface{}

---

##### `CpuCfsQuotaPeriodInput`<sup>Optional</sup> <a name="CpuCfsQuotaPeriodInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```go
func CpuCfsQuotaPeriodInput() *string
```

- *Type:* *string

---

##### `CpuManagerPolicyInput`<sup>Optional</sup> <a name="CpuManagerPolicyInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```go
func CpuManagerPolicyInput() *string
```

- *Type:* *string

---

##### `PodPidsLimitInput`<sup>Optional</sup> <a name="PodPidsLimitInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimitInput"></a>

```go
func PodPidsLimitInput() *f64
```

- *Type:* *f64

---

##### `CpuCfsQuota`<sup>Required</sup> <a name="CpuCfsQuota" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuota"></a>

```go
func CpuCfsQuota() interface{}
```

- *Type:* interface{}

---

##### `CpuCfsQuotaPeriod`<sup>Required</sup> <a name="CpuCfsQuotaPeriod" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```go
func CpuCfsQuotaPeriod() *string
```

- *Type:* *string

---

##### `CpuManagerPolicy`<sup>Required</sup> <a name="CpuManagerPolicy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```go
func CpuManagerPolicy() *string
```

- *Type:* *string

---

##### `PodPidsLimit`<sup>Required</sup> <a name="PodPidsLimit" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimit"></a>

```go
func PodPidsLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a>

---


### GoogleContainerAwsNodePoolManagementOutputReference <a name="GoogleContainerAwsNodePoolManagementOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resetAutoRepair">ResetAutoRepair</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRepair` <a name="ResetAutoRepair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resetAutoRepair"></a>

```go
func ResetAutoRepair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.autoRepairInput">AutoRepairInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.autoRepair">AutoRepair</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRepairInput`<sup>Optional</sup> <a name="AutoRepairInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.autoRepairInput"></a>

```go
func AutoRepairInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRepair`<sup>Required</sup> <a name="AutoRepair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.autoRepair"></a>

```go
func AutoRepair() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a>

---


### GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference <a name="GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolMaxPodsConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```go
func MaxPodsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```go
func MaxPodsPerNode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

---


### GoogleContainerAwsNodePoolTimeoutsOutputReference <a name="GoogleContainerAwsNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleContainerAwsNodePoolUpdateSettingsOutputReference <a name="GoogleContainerAwsNodePoolUpdateSettingsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolUpdateSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolUpdateSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.putSurgeSettings">PutSurgeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resetSurgeSettings">ResetSurgeSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSurgeSettings` <a name="PutSurgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.putSurgeSettings"></a>

```go
func PutSurgeSettings(value GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.putSurgeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

---

##### `ResetSurgeSettings` <a name="ResetSurgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resetSurgeSettings"></a>

```go
func ResetSurgeSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettings">SurgeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettingsInput">SurgeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SurgeSettings`<sup>Required</sup> <a name="SurgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettings"></a>

```go
func SurgeSettings() GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference</a>

---

##### `SurgeSettingsInput`<sup>Optional</sup> <a name="SurgeSettingsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettingsInput"></a>

```go
func SurgeSettingsInput() GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolUpdateSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a>

---


### GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference <a name="GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontainerawsnodepool"

googlecontainerawsnodepool.NewGoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxSurge">ResetMaxSurge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxUnavailable">ResetMaxUnavailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSurge` <a name="ResetMaxSurge" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxSurge"></a>

```go
func ResetMaxSurge()
```

##### `ResetMaxUnavailable` <a name="ResetMaxUnavailable" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxUnavailable"></a>

```go
func ResetMaxUnavailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurgeInput">MaxSurgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailableInput">MaxUnavailableInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurge">MaxSurge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailable">MaxUnavailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSurgeInput`<sup>Optional</sup> <a name="MaxSurgeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurgeInput"></a>

```go
func MaxSurgeInput() *f64
```

- *Type:* *f64

---

##### `MaxUnavailableInput`<sup>Optional</sup> <a name="MaxUnavailableInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailableInput"></a>

```go
func MaxUnavailableInput() *f64
```

- *Type:* *f64

---

##### `MaxSurge`<sup>Required</sup> <a name="MaxSurge" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurge"></a>

```go
func MaxSurge() *f64
```

- *Type:* *f64

---

##### `MaxUnavailable`<sup>Required</sup> <a name="MaxUnavailable" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailable"></a>

```go
func MaxUnavailable() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

---



