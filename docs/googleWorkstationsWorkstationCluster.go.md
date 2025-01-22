# `googleWorkstationsWorkstationCluster` Submodule <a name="`googleWorkstationsWorkstationCluster` Submodule" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkstationsWorkstationCluster <a name="GoogleWorkstationsWorkstationCluster" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster google_workstations_workstation_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationCluster(scope Construct, id *string, config GoogleWorkstationsWorkstationClusterConfig) GoogleWorkstationsWorkstationCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig">GoogleWorkstationsWorkstationClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig">GoogleWorkstationsWorkstationClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putDomainConfig">PutDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putPrivateClusterConfig">PutPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDomainConfig">ResetDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetPrivateClusterConfig">ResetPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomainConfig` <a name="PutDomainConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putDomainConfig"></a>

```go
func PutDomainConfig(value GoogleWorkstationsWorkstationClusterDomainConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putDomainConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

---

##### `PutPrivateClusterConfig` <a name="PutPrivateClusterConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putPrivateClusterConfig"></a>

```go
func PutPrivateClusterConfig(value GoogleWorkstationsWorkstationClusterPrivateClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putPrivateClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putTimeouts"></a>

```go
func PutTimeouts(value GoogleWorkstationsWorkstationClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDomainConfig` <a name="ResetDomainConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetDomainConfig"></a>

```go
func ResetDomainConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPrivateClusterConfig` <a name="ResetPrivateClusterConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetPrivateClusterConfig"></a>

```go
func ResetPrivateClusterConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleWorkstationsWorkstationCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleWorkstationsWorkstationCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleWorkstationsWorkstationCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleWorkstationsWorkstationCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleWorkstationsWorkstationCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList">GoogleWorkstationsWorkstationClusterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.controlPlaneIp">ControlPlaneIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.degraded">Degraded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfig">DomainConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference">GoogleWorkstationsWorkstationClusterDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfig">PrivateClusterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference">GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference">GoogleWorkstationsWorkstationClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfigInput">DomainConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfigInput">PrivateClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.conditions"></a>

```go
func Conditions() GoogleWorkstationsWorkstationClusterConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList">GoogleWorkstationsWorkstationClusterConditionsList</a>

---

##### `ControlPlaneIp`<sup>Required</sup> <a name="ControlPlaneIp" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.controlPlaneIp"></a>

```go
func ControlPlaneIp() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Degraded`<sup>Required</sup> <a name="Degraded" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.degraded"></a>

```go
func Degraded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainConfig`<sup>Required</sup> <a name="DomainConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfig"></a>

```go
func DomainConfig() GoogleWorkstationsWorkstationClusterDomainConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference">GoogleWorkstationsWorkstationClusterDomainConfigOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateClusterConfig`<sup>Required</sup> <a name="PrivateClusterConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfig"></a>

```go
func PrivateClusterConfig() GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference">GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeouts"></a>

```go
func Timeouts() GoogleWorkstationsWorkstationClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference">GoogleWorkstationsWorkstationClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainConfigInput`<sup>Optional</sup> <a name="DomainConfigInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.domainConfigInput"></a>

```go
func DomainConfigInput() GoogleWorkstationsWorkstationClusterDomainConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PrivateClusterConfigInput`<sup>Optional</sup> <a name="PrivateClusterConfigInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.privateClusterConfigInput"></a>

```go
func PrivateClusterConfigInput() GoogleWorkstationsWorkstationClusterPrivateClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterIdInput"></a>

```go
func WorkstationClusterIdInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.workstationClusterId"></a>

```go
func WorkstationClusterId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkstationsWorkstationClusterConditions <a name="GoogleWorkstationsWorkstationClusterConditions" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterConditions {

}
```


### GoogleWorkstationsWorkstationClusterConfig <a name="GoogleWorkstationsWorkstationClusterConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Network: *string,
	Subnetwork: *string,
	WorkstationClusterId: *string,
	Annotations: *map[string]*string,
	DisplayName: *string,
	DomainConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	PrivateClusterConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.network">Network</a></code> | <code>*string</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | ID to use for the workstation cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.domainConfig">DomainConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a></code> | domain_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#id GoogleWorkstationsWorkstationCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.location">Location</a></code> | <code>*string</code> | The location where the workstation cluster should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.privateClusterConfig">PrivateClusterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a></code> | private_cluster_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#project GoogleWorkstationsWorkstationCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#network GoogleWorkstationsWorkstationCluster#network}

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.

Must be part of the subnetwork specified for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#subnetwork GoogleWorkstationsWorkstationCluster#subnetwork}

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.workstationClusterId"></a>

```go
WorkstationClusterId *string
```

- *Type:* *string

ID to use for the workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#workstation_cluster_id GoogleWorkstationsWorkstationCluster#workstation_cluster_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#annotations GoogleWorkstationsWorkstationCluster#annotations}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#display_name GoogleWorkstationsWorkstationCluster#display_name}

---

##### `DomainConfig`<sup>Optional</sup> <a name="DomainConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.domainConfig"></a>

```go
DomainConfig GoogleWorkstationsWorkstationClusterDomainConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#domain_config GoogleWorkstationsWorkstationCluster#domain_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#id GoogleWorkstationsWorkstationCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#labels GoogleWorkstationsWorkstationCluster#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the workstation cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#location GoogleWorkstationsWorkstationCluster#location}

---

##### `PrivateClusterConfig`<sup>Optional</sup> <a name="PrivateClusterConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.privateClusterConfig"></a>

```go
PrivateClusterConfig GoogleWorkstationsWorkstationClusterPrivateClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

private_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#private_cluster_config GoogleWorkstationsWorkstationCluster#private_cluster_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#project GoogleWorkstationsWorkstationCluster#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConfig.property.timeouts"></a>

```go
Timeouts GoogleWorkstationsWorkstationClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts">GoogleWorkstationsWorkstationClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#timeouts GoogleWorkstationsWorkstationCluster#timeouts}

---

### GoogleWorkstationsWorkstationClusterDomainConfig <a name="GoogleWorkstationsWorkstationClusterDomainConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterDomainConfig {
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig.property.domain">Domain</a></code> | <code>*string</code> | Domain used by Workstations for HTTP ingress. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Domain used by Workstations for HTTP ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#domain GoogleWorkstationsWorkstationCluster#domain}

---

### GoogleWorkstationsWorkstationClusterPrivateClusterConfig <a name="GoogleWorkstationsWorkstationClusterPrivateClusterConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig {
	EnablePrivateEndpoint: interface{},
	AllowedProjects: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>interface{}</code> | Whether Workstations endpoint is private. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects">AllowedProjects</a></code> | <code>*[]*string</code> | Additional project IDs that are allowed to attach to the workstation cluster's service attachment. |

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint"></a>

```go
EnablePrivateEndpoint interface{}
```

- *Type:* interface{}

Whether Workstations endpoint is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#enable_private_endpoint GoogleWorkstationsWorkstationCluster#enable_private_endpoint}

---

##### `AllowedProjects`<sup>Optional</sup> <a name="AllowedProjects" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects"></a>

```go
AllowedProjects *[]*string
```

- *Type:* *[]*string

Additional project IDs that are allowed to attach to the workstation cluster's service attachment.

By default, the workstation cluster's project and the VPC host project (if different) are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#allowed_projects GoogleWorkstationsWorkstationCluster#allowed_projects}

---

### GoogleWorkstationsWorkstationClusterTimeouts <a name="GoogleWorkstationsWorkstationClusterTimeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

&googleworkstationsworkstationcluster.GoogleWorkstationsWorkstationClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#create GoogleWorkstationsWorkstationCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#delete GoogleWorkstationsWorkstationCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#update GoogleWorkstationsWorkstationCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#create GoogleWorkstationsWorkstationCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#delete GoogleWorkstationsWorkstationCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_cluster#update GoogleWorkstationsWorkstationCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkstationsWorkstationClusterConditionsList <a name="GoogleWorkstationsWorkstationClusterConditionsList" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleWorkstationsWorkstationClusterConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.get"></a>

```go
func Get(index *f64) GoogleWorkstationsWorkstationClusterConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleWorkstationsWorkstationClusterConditionsOutputReference <a name="GoogleWorkstationsWorkstationClusterConditionsOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleWorkstationsWorkstationClusterConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.details">Details</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions">GoogleWorkstationsWorkstationClusterConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleWorkstationsWorkstationClusterConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterConditions">GoogleWorkstationsWorkstationClusterConditions</a>

---


### GoogleWorkstationsWorkstationClusterDomainConfigOutputReference <a name="GoogleWorkstationsWorkstationClusterDomainConfigOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterDomainConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleWorkstationsWorkstationClusterDomainConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleWorkstationsWorkstationClusterDomainConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterDomainConfig">GoogleWorkstationsWorkstationClusterDomainConfig</a>

---


### GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference <a name="GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects">ResetAllowedProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedProjects` <a name="ResetAllowedProjects" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects"></a>

```go
func ResetAllowedProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname">ClusterHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri">ServiceAttachmentUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput">AllowedProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput">EnablePrivateEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects">AllowedProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterHostname`<sup>Required</sup> <a name="ClusterHostname" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname"></a>

```go
func ClusterHostname() *string
```

- *Type:* *string

---

##### `ServiceAttachmentUri`<sup>Required</sup> <a name="ServiceAttachmentUri" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri"></a>

```go
func ServiceAttachmentUri() *string
```

- *Type:* *string

---

##### `AllowedProjectsInput`<sup>Optional</sup> <a name="AllowedProjectsInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput"></a>

```go
func AllowedProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnablePrivateEndpointInput`<sup>Optional</sup> <a name="EnablePrivateEndpointInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput"></a>

```go
func EnablePrivateEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedProjects`<sup>Required</sup> <a name="AllowedProjects" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects"></a>

```go
func AllowedProjects() *[]*string
```

- *Type:* *[]*string

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint"></a>

```go
func EnablePrivateEndpoint() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleWorkstationsWorkstationClusterPrivateClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterPrivateClusterConfig">GoogleWorkstationsWorkstationClusterPrivateClusterConfig</a>

---


### GoogleWorkstationsWorkstationClusterTimeoutsOutputReference <a name="GoogleWorkstationsWorkstationClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleworkstationsworkstationcluster"

googleworkstationsworkstationcluster.NewGoogleWorkstationsWorkstationClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleWorkstationsWorkstationClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationCluster.GoogleWorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



